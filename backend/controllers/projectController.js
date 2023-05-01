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

exports.removeProject = async(req,res) => {
  try{
    const project = await Project.findByIdAndDelete({_id:req.params.id});
    if(!project){
      return res.status(404).json({
        success:false,
        msg:"Project Not Found"
      })
    }
    return res.status(200).json({
      success:true,
      msg:"Project Removed Successfully",
      project
    });
  }
  catch(err){
    console.log(err)
    res.status(500).json({
      success: false,
      message: 'An error occurred while deleting the project'
    });
  } 
}

exports.getRelatedTasks = async(req,res)=>{
  try{
    const project = await Project.findById({_id:req.params.id}).populate('tasks')
    if(!project){
      return res.status(404).json({
        success: false,
        msg:"No project related tasks present"
      })
    }
    return res.status(200).json({
      success: true,
      project
    })
  }catch(err){console.log(err)}
}

exports.getTasksSizeofEachProject = async(req,res)=>{
  try{
    const project = await Project.find({user:req.user._id})
    if(project.length===0){
      return res.status(404).json({
        success: false,
        msg:"No Project available"
      })
    }
    const projectsizes = project.map((p,i)=>{
      return {
        id: p._id,
        name:p.projectName,
        taskSize:p.tasks.length
      }
    })
    return res.status(200).json({
      projectsizes
    })
  }catch(e){console.log(e)}
}