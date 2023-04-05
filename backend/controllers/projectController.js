const Project = require("../models/project");
//const user = require("../models/user");

exports.addProject = async (req, res) => {
  try {
    const { projectID, projectName, Description, sDate, eDate } = req.body;

    const item = await Project.create({
      projectID,
      projectName,
      Description,
      sDate,
      eDate,
      user: req.user._id,
    });

    res.status(200).json({
      item,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getProject = async (req, res) => {
  try {
    const item = await Project.find({ user: req.user._id });

    if (!item) {
      res.status(401).json({
        msg: "Item do not exist for the user",
        success: false,
      });
    }

    res.status(200).json({
      success: true,
      item,
    });
  } catch (error) {
    console.log(error);
  }
};
