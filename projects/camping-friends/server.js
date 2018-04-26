//dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("./middleware/logger.js");

//create instances
const camperRouter = require("./routes/campers.js");
// const teamRouter = require("./routes/teams.js")

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(logger);

app.use("/campers", camperRouter);

mongoose.connect("mongodb://localhost:27017/campers", err => {
  if (err) console.log(err);
  console.log("Connected to MongoDb");
});

app.listen(port, () => console.log("Server running on port " + port));
