const express = require("express");
const router = express.Router();

const { addProject, getProject } = require("../controllers/projectController");
const { isLoggedIn } = require("../middlewares/auth");
router.route("/addproject").post(isLoggedIn, addProject);
router.route("/getproject").get(isLoggedIn, getProject);

module.exports = router;
