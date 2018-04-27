//dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("./middleware/logger.js");

//create instances
const camperRouter = require("./routes/campers.js");
const spotsRouter = require("./routes/spots.js");

const app = express();
const port = process.env.port || 3001;

app.use(bodyParser.json());
app.use(logger);

app.use("/campers", camperRouter);
app.use("/spots", spotsRouter);

mongoose.connect("mongodb://localhost:27017/campers", err => {
  if (err) throw err;
  console.log("Connected to the database");
});

app.listen(port, () => console.log("Server running on port " + port));
