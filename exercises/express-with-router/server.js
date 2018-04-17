const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const catRouter = require("./routes/cats.js");
const logger = require("./middleware/logger.js");

const port = 3001;

//middleware
app.use(bodyParser.json());
app.use(logger);

//routes
app.use("/cats", catRouter);

app.listen(port, () => console.log("Server running on port " + port));