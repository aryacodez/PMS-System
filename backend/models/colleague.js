const mongoose = require("mongoose");

const colleagueSchema = mongoose.Schema({
  memberID: {
    type: Number,
  },
  memberName: {
    type: String,
  },
  Designation: {
    type: String,
  },
  mobileNumber: {
    type: Number,
  },
  emailID: {
    type: String,
  },
  //project: {
  //     type: mongoose.Schema.ObjectId,
  //     ref: "Project",
  //   },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Colleague", colleagueSchema);
