require("dotenv");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  uniqueid:{
    type:String
  },
  avatar: {
    id:String,
    url:String
  },
  name: {
    type: String,   
  },
  email: {
    type: String,
    unique:[true,"Email Exists"]
  },
  password: {
    type: String,    
    select: false
  },
  mobilenumber: {
      type: Number,
  },
  role: {
    type:String,
    default:'user'    
  },
  request:{
    type:String,
    default:'No'
  },
  // forgotPasswordToken:String,
  // forgotPasswordExpiry:Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hashSync(this.password, 10);
});

userSchema.methods.isValidatedPassword = async function (passpassword) {
  return await bcrypt.compare(passpassword, this.password);
};

userSchema.methods.jwtTokenization = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY,
  });
};

module.exports = mongoose.model("User", userSchema);
