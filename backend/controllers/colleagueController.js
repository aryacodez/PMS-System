const Colleague = require("../models/colleague");
const Project = require("../models/project");

exports.add = async (req, res) => {
  try {
    const {
      memberID,
      memberName,
      Designation,
      mobileNumber,
      emailID,
      project,
    } = req.body;
    const projectid = await Project.findOne({ projectName: project }).select(
      "projectID -_id"
    );
    const _idproject = await Project.findOne({ projectName: project }).select(
      "_id"
    );

    if (!(_idproject && projectid)) {
      return res.status(400).json({
        success: false,
        msg: "Project Non-existence",
      });
    }

    const member = await Colleague.create({
      memberID,
      memberName,
      Designation,
      mobileNumber,
      emailID,
      project,
      projectId: projectid,
      user: req.user._id,
    });
    res.status(200).json({
      success: true,
      member,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getList = async (req, res) => {
  try {
    const coll = await Colleague.find({ user: req.user._id });
    if (!coll) {
      return res.status(404).json({
        success: false,
        msg: "No Colleague Present",
      });
    }
    return res.status(200).json({
      success: true,
      coll,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.remove = async (req, res) => {
  try {
    const colleague = await Colleague.findByIdAndDelete({ _id: req.params.id });
    if (!colleague) {
      return res.status(404).json({
        success: false,
        msg: "No Task Present",
      });
    }
    //  When task get removed we have to remove the task also from project which it is associated with. For this we
    //  will do compenstation operation of the add task method
    // const taskRemove = await Project.findOneAndUpdate(
    //     {"tasks.task":req.params.id},
    //     {$pull:{tasks:{task: req.params.id}}},
    //     {new:true, upsert:true}
    // ).populate('tasks').exec();

    return res.status(200).json({
      success: true,
      msg: "Colleague successfully removed",
      colleague,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.colleagueCount = async (req, res) => {
  try {
    const info = await Colleague.find({ user: req.user._id });
    const countMates = info.length || 0;
    res.status(200).json({
      success: true,
      countMates,
    });
  } catch (error) {
    console.log(error);
  }
};
