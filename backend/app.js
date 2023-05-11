const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
require("dotenv").config();
const morgan = require("morgan");
const fileUpload = require('express-fileupload')

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : '/tmp/'
}))

app.use(morgan("tiny"));

const user = require("./routes/userRoute");
const project = require("./routes/projectRoute");
const client = require("./routes/clientRoute");
const task = require("./routes/taskRoute");
const count = require("./routes/countRoute");
const colleageue = require("./routes/colleagueRoute");

app.use("/api/v1", user);
app.use("/api/v1", project);
app.use("/api/v1", client);
app.use("/api/v1", task);
app.use("/api/v1", count);
app.use("/api/v1", colleageue);

module.exports = app;
