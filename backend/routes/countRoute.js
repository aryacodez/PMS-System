const express = require('express');
const router = express.Router();
const {saveTotalProject,saveTotalClients,getTotal} = require('../controllers/countController')
const { isLoggedIn } = require("../middlewares/auth");


router.route('/countprojects').patch(isLoggedIn,saveTotalProject)
router.route('/countclients').patch(isLoggedIn,saveTotalClients)
router.route('/getcounter').get(isLoggedIn,getTotal)


module.exports = router