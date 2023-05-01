const express = require("express");
const router = express.Router();

const { addClient, getClient } = require("../controllers/clientController");
const { isLoggedIn } = require("../middlewares/auth");

router.route("/addclient").post(isLoggedIn,addClient);
router.route("/getclient").get(isLoggedIn,getClient);

module.exports = router;
