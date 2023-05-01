const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
  clientID: {
    type: String,
  },
  clientName: {
    type: String,
  },
  companyName: {
    type: String,
  },
  mobileNumber: {
    type: Number,
  },
  emailID: {
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

module.exports = mongoose.model("Client", clientSchema);
