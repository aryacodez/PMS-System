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
    type:String
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  info: {
    id: {
      type: String,
    },
    url: {
      type: String,
    },
  },  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model("Task",taskSchema);