const User = require("../models/user");
const cookieToken = require("../utils/cookieToken");
const cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true
})

exports.register = async (req, res) => {
  try {
    if(!req.files){
      return res.status(400).json({
        success:false,
        msg:"Image need to be uploaded"
      })
    }
    const {uniqueid, name, email, password, mobilenumber } = req.body;

    if (!name || !email || !password || !uniqueid || !mobilenumber) {
      return res.status(400).json({
        msg: "Credintials Missing",
      });
    }

    const emailExists = await User.findOne({ email });

    if (emailExists) {
      return res.status(400).json({
        msg: "Email already exists",
      });
    }
    
    let file = req.files.avatar
    console.log(file)
    const result = await cloudinary.v2.uploader.upload(file.tempFilePath,{
      folder:"users-photo",
      width:150,
      crop:"scale"
    })
    
    const registerUser = await User.create({
      uniqueid,
      avatar:{
        id: result.public_id,
        url: result.secure_url
      }, 
      name,
      email,
      password,
      mobilenumber
    });

    cookieToken(registerUser, res);
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        msg: "Credintials Missing",
      });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({
        msg: "User doesnt Exists",
      });
    }

    const passwordMatch = await user.isValidatedPassword(password);

    if (!passwordMatch) {
      return res.status(400).json({
        msg: "Password Doesnt Matched",
      });
    }

    cookieToken(user, res);
  } catch (error) {
    console.log(error);
  }
};

exports.logout = async (req, res) => {
  res
    .clearCookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .status(200)
    .json({
      success: true,
      msg: "Logged Out Successfull",
    });
};

exports.getLoggedInUserDetails = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updateProfile= async(req,res)=>{
  try{
    const user = await User.findById(req.user.id)
    if(!user){
      return res.status(400).json({
        msg:"No Such User Exists"
      })
    }
    const {name,password,mobilenumber,organization,address,gender} =req.body
    if(name) user.name=name
    if(password) user.password=password
    if(mobilenumber) user.mobilenumber=mobilenumber
    if(organization) user.organization=organization
    if(address) user.address=address
    if(gender) user.gender=gender
    await user.save()
    return res.status(200).json({
      success:true,
      msg:"User Updated Successfully"
    })
  }catch(e){
    console.log(e)
  }
}

