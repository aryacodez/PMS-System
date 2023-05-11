const express = require("express");
const router = express.Router();

const {
  register,
  login,
  logout,
  getLoggedInUserDetails,
  updateProfile,
  getAllUsers,
  updateUserStatus
} = require("../controllers/userController");
const { isLoggedIn } = require("../middlewares/auth");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(isLoggedIn,logout);
router.route("/profile").get(isLoggedIn,getLoggedInUserDetails);
router.route("/updateprofile").patch(isLoggedIn, updateProfile);
router.route("/getalluser").get(isLoggedIn, getAllUsers);
router.route("/updateuserrole/:id").patch(isLoggedIn, updateUserStatus);


module.exports = router;
