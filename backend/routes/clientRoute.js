const express = require("express");
const router = express.Router();

const { addClient, getClient,clientCount } = require("../controllers/clientController");
const { isLoggedIn } = require("../middlewares/auth");

router.route("/addclient").post(isLoggedIn,addClient);
router.route("/getclient").get(isLoggedIn,getClient);
router.route("/clientcount").get(isLoggedIn,clientCount);

module.exports = router;
