const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { expressjwt : eJwt } = require("express-jwt");

exports.requireSignin = eJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  userProperty: "auth",
});
exports.isAuthenticated=(req,res,next)=>{
  let checker = req.user && req.auth && req.user._id == req.auth._id
  if(!checker){
      return res.status(403).json({
          error:"ACCESS DENIED"
      })
  }
  next();
}
exports.isLoggedIn = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(400).json({
        success: false,
        msg: "Token Not Available",
      });
    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    console.log(error);
  }
};

exports.isAdmin = async(req,res,next) => {
  try{
    if(!req.user || !req.user.role!=='admin'){
      return res.status(401).send('Unauthorized');
    }
    next();
  }catch(e){
    console.log(e)
  }
}

