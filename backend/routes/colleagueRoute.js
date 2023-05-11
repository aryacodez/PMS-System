const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middlewares/auth");
const {add,getList,remove} = require("../controllers/colleagueController")

router.route('/addmember').post(isLoggedIn,add)
router.route('/getmember').get(isLoggedIn,getList)
router.route('/removemember/:id').delete(isLoggedIn,remove)

module.exports = router;
