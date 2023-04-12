const express = require("express");
const router = express.Router();

const { addProject, getProject,removeProject } = require("../controllers/projectController");
const { isLoggedIn } = require("../middlewares/auth");
router.route("/addproject").post(isLoggedIn, addProject);
router.route("/getproject").get(isLoggedIn, getProject);
router.route("/remove-project/:id").delete(isLoggedIn, removeProject);

module.exports = router;
