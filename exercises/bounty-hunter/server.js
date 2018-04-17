const express = require("express");
const uuid = require("uuid");
const bodyParser = require("body-parser");
const app = express();
let bounties = require("./bounties.js")
const port = 3001;

app.use(bodyParser.json());

app.route("/bounties")
  .get((req, res) => {
    res.status(200).send(cats);
  })
  .post((req, res) => {
    const newBounty = req.body;
    newBounty._id = uuid();
    bounty.push(newBounty);
    res.status(201).send(newBounty);
  })

app.route("./bounties/:id")
  .get((req, res) => {
    const { id } = req.params;
    console.log(id);
    const foundBounty = bounties.filter(bounty => bounty._id === id)[0];
    res.status(200).send(foundBounty)
  })
  .delete((req, res) => {
    const { id } = req.params;
    const editedBounty = req.params;
    bounty = bounties.map(bounty => bounty._id === id ? editedBounty = {...bounty, ...editedBounty} :
    bounty);
    res.status(200).send(editedBounty);
  })
  .put((req, res) => {
    const { id } = req.params;
    const editedBounties = req.params;
    bounties = bounties.map(bounty => bounty._id === id ? editedBounty = {...bounty, ...editedBounty} :
    bounty);
    res.status(200).send(editedBounty);
  })

app.listen(port, () => console.log("Server running on port " + port));