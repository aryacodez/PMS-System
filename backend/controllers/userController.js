const User = require("../models/user");
const cookieToken = require("../utils/cookieToken");
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true
})

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
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
    let files = req.files.photo
    const result = await cloudinary.uploader.upload(files.tempFilePath,{
      folder:"User Photos",
      width: 720
    })
    const registerUser = await User.create({
      avatar:{
        id: result.public_id,
        url: result.secure_url
      }, 
      name,
      email,
      password,
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
