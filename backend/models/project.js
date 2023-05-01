const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  projectID: {
    type: String,
  },
  projectName: {
    type: String,
  },
  Description: {
    type: String,
  },
  sDate: {
    type: String,
  },
  eDate: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    //name:[]
  },
  tasks: [
    {
      task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
      },
      name: {
        type: String
      }
    }
  ]
});

module.exports = mongoose.model("Project", projectSchema);
