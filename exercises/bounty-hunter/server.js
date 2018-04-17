const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const bountyRouter = require("./routes/bounties.js");

const port = 3001;

//middleware
app.use(bodyParser.json());
//outsource the "cat" routes to the cats.js
//import them into this file and then when a request is made to the cats endpoint,
//route the request/response objects to them

app.use("/bounties", bountyRouter);

app.listen(port, () => console.log("Server running on port " + port));
