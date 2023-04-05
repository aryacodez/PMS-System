const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  projectID: {
    type: Number,
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
  },
});

module.exports = mongoose.model("Project", projectSchema);
