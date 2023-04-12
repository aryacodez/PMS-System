const express = require('express');
const router = express.Router();

const {addTask,getTask,removeTask} = require('../controllers/taskController')
const { isLoggedIn } = require("../middlewares/auth");

router.route('/addTask').post(isLoggedIn,addTask)
router.route('/getTask').get(isLoggedIn,getTask)
router.route('/removetask/:id').get(isLoggedIn,removeTask)

module.exports = router;