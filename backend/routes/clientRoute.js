const express = require("express");
const router = express.Router();

const { addClient, getClient } = require("../controllers/clientController");

router.route("/addclient").post(addClient);
router.route("/getclient").get(getClient);

module.exports = router;
