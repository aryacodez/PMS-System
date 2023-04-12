const Task = require('../models/task')

exports.addTask = async(req,res)=>{
    try{

        const {taskID,taskName,sDate,eDate} = req.body;

        const task = await User.create({
            taskID,
            taskName,
            sDate,
            eDate,
            user:req.user._id
        });

        res.status(200).json({
            success:true,
            msg:"Task Added Successfully",
            task
        })

    }catch(err){
        console.log(err)
    }
}

exports.getTask = async(req,res) => {
    try{
        const task = await Task.find({user:req.user._id})
        if(!task){
            return res.status(404).json({
                success:false,
                msg:"No Task Present"
            })
        }
        return res.status(200).json({
            success:true,
            task
        })
    }catch(err){console.log(err)}
}

exports.removeTask = async(req,res) => {
    try{
        const task = await Task.findByIdAndDelete({_id:req.params.id})
        if(!task){
            return res.status(404).json({
                success:false,
                msg:"No Task Present"
            })
        }
        return res.status(200).json({
            success:true,
            msg:"Task successfully removed",
            task
        })
    }catch(err){console.log(err)}
}