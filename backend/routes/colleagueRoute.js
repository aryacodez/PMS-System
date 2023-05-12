const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middlewares/auth");
const {
  add,
  getList,
  remove,
  colleagueCount,
} = require("../controllers/colleagueController");

router.route("/addmember").post(isLoggedIn, add);
router.route("/getmember").get(isLoggedIn, getList);
router.route("/matescount").get(isLoggedIn, colleagueCount);
router.route("/removemember/:id").delete(isLoggedIn, remove);

module.exports = router;
