const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  taskID: {
    type: Number,
  },
  taskName: {
    type: String,
  },
  sDate: {
    type: String,
  },
  eDate: {
    type: String,
  },
  status:{
    type:String,
    default:"Not Started"
  },
  project:{
    type: String,   
    //required:true 
  },
  projectId:{
    type:String,
    required:true
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model("Task",taskSchema);