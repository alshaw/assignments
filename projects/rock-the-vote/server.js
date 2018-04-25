const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const issuesRouter = require("./routes/issues");
let app = express();
const port = 3001;
// const logger = require("./middleware/logger.js");

// const commentsRouter = require('./routes/comments')

// Middleware
app.use(bodyParser.json());
// app.use(logger)
// Routes
app.use("/issues", issuesRouter);
// app.use("/comments", commentsRouter)

mongoose.connect("mongodb://localhost:27017/issues", err => {
  if (err) console.log(err);
  console.log("Connected to MongoDb");
});

app.listen(port, () => console.log("Server running on port " + port));
