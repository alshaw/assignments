const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const issueRouter = require("./routes/issues");
const commentsRouter = require("./routes/comments");
const app = express();
const port = process.env.PORT || 3001;
// const logger = require("./middleware/logger.js");

// const commentsRouter = require('./routes/comments')

// Middleware
app.use(bodyParser.json());
// app.use(logger)
// Routes
app.use("/issues", issueRouter);
app.use("/comments", commentsRouter)

mongoose.connect("mongodb://localhost:27017/issues", err => {
  if (err) console.log(err);
  console.log("Connected to MongoDb");
});

app.listen(port, () => console.log("Server running on port " + port));
