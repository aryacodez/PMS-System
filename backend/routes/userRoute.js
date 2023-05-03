const express = require("express");
const router = express.Router();

const {
  register,
  login,
  logout,
  getLoggedInUserDetails,
  updateProfile
} = require("../controllers/userController");
const { isLoggedIn } = require("../middlewares/auth");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(isLoggedIn,logout);
router.route("/profile").get(isLoggedIn, getLoggedInUserDetails);
router.route("/updateprofile").patch(isLoggedIn, updateProfile);

module.exports = router;
