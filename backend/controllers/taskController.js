const Task = require("../models/task");
const Project = require("../models/project");
const cloudinary = require("cloudinary");
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});
exports.addTask = async (req, res) => {
  try {
    const { taskID, taskName, sDate, eDate, project } = req.body;

    const projectid = await Project.findOne({ projectName: project }).select(
      "projectID -_id"
    );
    const _idproject = await Project.findOne({ projectName: project }).select(
      "_id"
    );
    //return res.status(200).json({_idproject})
    if (!(_idproject && projectid)) {
      return res.status(400).json({
        success: false,
        msg: "Project Non-existence",
      });
    }

    const task = await Task.create({
      taskID,
      taskName,
      sDate,
      eDate,
      project,
      projectId: projectid,
      user: req.user._id,
    });

    // counter.notstarted+=1
    // await counter.save()
    const taskAdd = await Project.findByIdAndUpdate(
      _idproject,
      { $push: { tasks: { task: task._id, name: task.taskName } } },
      { new: true, upsert: true }
    )
      .populate("tasks")
      .exec();

    res.status(200).json({
      success: true,
      msg: "Task Added Successfully",
      task,
      taskAdd,
    });
  } catch (err) {
    console.log(err);
  }
  // try {
  //     const { taskID, taskName, sDate, eDate, project } = req.body;

  //     const projectid = await Project.findOne({ projectName: project }).select(
  //       "projectID -_id"
  //     );
  //     const _idproject = await Project.findOne({ projectName: project }).select(
  //       "_id"
  //     );

  //     if (!(_idproject && projectid)) {
  //       return res.status(400).json({
  //         success: false,
  //         msg: "Project Non-existence",
  //       });
  //     }

  //     if (!req.files) {
  //       res.status(400).json({
  //         msg: "Files Doesnt Exist",
  //       });
  //     }

  //     let fileUploader = cloudinary.v2.uploader.upload(
  //       req.files.info.tempFilePath,
  //       {
  //         folder: "Task Files",
  //       }
  //     );

  //     req.body.info = {
  //       id: fileUploader.public_id,
  //       secure_url: fileUploader.secure_url,
  //     };

  //     req.body.user = req.user.id;

  //     const task = await Task.create({
  //       taskID,
  //       taskName,
  //       sDate,
  //       eDate,
  //       project,
  //       info,
  //       projectId: projectid,
  //       user: req.user._id,
  //     });

  //     const taskAdd = await Project.findByIdAndUpdate(
  //       _idproject,
  //       { $push: { tasks: { task: task._id, name: task.taskName } } },
  //       { new: true, upsert: true }
  //     )
  //       .populate("tasks")
  //       .exec();

  //     res.status(200).json({
  //       success: true,
  //       msg: "Task Added Successfully",
  //       task,
  //       taskAdd,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
};

exports.getTask = async (req, res) => {
  try {
    const task = await Task.find({ user: req.user._id });
    if (!task) {
      return res.status(404).json({
        success: false,
        msg: "No Task Present",
      });
    }
    return res.status(200).json({
      success: true,
      task,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.removeTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete({ _id: req.params.id });
    if (!task) {
      return res.status(404).json({
        success: false,
        msg: "No Task Present",
      });
    }
    //  When task get removed we have to remove the task also from project which it is associated with. For this we
    //  will do compenstation operation of the add task method
    const taskRemove = await Project.findOneAndUpdate(
      { "tasks.task": req.params.id },
      { $pull: { tasks: { task: req.params.id } } },
      { new: true, upsert: true }
    )
      .populate("tasks")
      .exec();

    return res.status(200).json({
      success: true,
      msg: "Task successfully removed",
      task,
      taskRemove,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const task = await Task.findById({ _id: req.params.id });
    const counter = await Taskcounter.findOne({ user: req.user._id });

    if (task.length === 0) {
      return res.status(400).json({
        success: false,
        msg: "Task not found",
      });
    }

    task.status = status;

    await task.save();
    return res.status(200).json({
      success: true,
      msg: "Task Status Updated",
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getStatusCount = async (req, res) => {
  try {
    const taskCompleted = await Task.find({
      user: req.user._id,
      status: "Completed",
    });
    const taskNotStarted = await Task.find({
      user: req.user._id,
      status: "Not Started",
    });
    const taskInprogress = await Task.find({
      user: req.user._id,
      status: "In Progress",
    });

    const countCompleted = taskCompleted.length || 0;
    const countNotStarted = taskNotStarted.length || 0;
    const countInProgress = taskInprogress.length || 0;
    return res.status(200).json({
      success: true,
      countCompleted,
      countNotStarted,
      countInProgress,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.downloadFile = async (req, res) => {
  try {
    const publicID = req.params.id;
    const fileUrl = cloudinary.v2.uploader.download(publicID, {
      resource_type: auto,
    });

    //res.setHeader("Content-Disposition", "attachment; filename=" + publicID);
    //res.setHeader("Content-Type", "application/octet-stream");

    const filePath = `./downloads/${publicID}`;
    const writeStream = fs.createWriteStream(filePath);

    fileUrl
      .pipe(writeStream)
      .on("error", function (err) {
        console.log(error);
        return res.status(500).json({
          success: false,
          msg: "Downloading error",
        });
      })
      .on("finish", function () {
        console.log("File Downloaded");
        return res.status(200).json({
          success: true,
          msg: "File Downloaded Successfully",
        });
      });
  } catch (error) {
    console.log(error);
  }
};

exports.taskCount = async (req, res) => {
  try {
    const info = await Task.find({ user: req.user._id });
    const countTask = info.length || 0;
    res.status(200).json({
      success: true,
      countTask,
    });
  } catch (error) {
    console.log(error);
  }
};
