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
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  // project: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: "Project",
  // },
  //   image: [
  //     {
  //       id: {
  //         type: String,
  //       },
  //       secure_url: {
  //         type: String,
  //       },
  //     },
  //   ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
