const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const logger = require("./middleware/logger.js");
const bountyRouter = require("./routes/bounties.js");
// const teamRouter = require("./routes/teams.js")

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(logger);

app.use("/bounties", bountyRouter);
// app.use("/teams", teamRouter);

mongoose.connect("mongodb://localhost:27017/bounties", (err) => {
  if (err) console.log(err);
  console.log("Connected to MongoDb");
})

app.listen(port, () => console.log("Server running on port " + port));