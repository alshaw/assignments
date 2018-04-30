//dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("./middleware/logger.js");

//create instances
const itemsRouter = require("./routes/items.js");

const app = express();
const port = process.env.port || 3001;

app.use(bodyParser.json());
app.use(logger);

app.use("/items", itemsRouter);

mongoose.connect("mongodb://localhost:27017/items", err => {
  if (err) throw err;
  console.log("Connected to the database");
});

app.listen(port, () => console.log("Server running on port " + port));
