const express = require('express');
const router = express.Router();


const {
    addTask,
    getTask,
    removeTask,
    updateStatus,
    getStatusCount,
    downloadFile,
  } = require("../controllers/taskController");
  const { isLoggedIn } = require("../middlewares/auth");
  
  router.route("/addtask").post(isLoggedIn, addTask);
  router.route("/gettask").get(isLoggedIn, getTask);
  router.route("/taskstatuscount").get(isLoggedIn, getStatusCount);
  router.route("/removetask/:id").delete(isLoggedIn, removeTask);
  router.route("/updatestatus/:id").patch(isLoggedIn, updateStatus);
  router.route("/downloader/:id").post(downloadFile);

module.exports = router;