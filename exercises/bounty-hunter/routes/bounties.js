const express = require("express");
const uuid = require("uuid");
let bounties = require("../bounties.js");


bountyRouter
  .route("/")
  .get((req, res) => {
    const { query } = req;
    const queriedBounties = bounties.filter(bounty => {
      for (let key in query) {
        if (
          !bounty.hasOwnProperty(key) ||
          String(bounty[key]).toLowerCase() !== query[key].toLowerCase()
        ) {
          return false;
        }
      }
      return true;
    });
    res.status(200).send(queriedBounties);
  })
  .post((req, res) => {
    const newBounty = req.body;
    newBounty._id = uuid();
    Bounties.push(newBounty);
    res.status(201).send(newBounty);
  });

bountyRouter
  .route("/:id")
  .get((req, res) => {
    const { id } = req.params;
    console.log(id);
    const foundBounty = bounties.filter(bounty => bounty._id === id)[0];
    res.status(200).send(foundBounty);
  })
  .delete((req, res) => {
    const { id } = req.params;
    bounties = bounties.filter(newBounty => newBounty._id !== id);
    res.status(204).send();
  })
  .put((req, res) => {
    const { id } = req.params;
    const editedBounties = req.params;
    bounties = bounties.map(
      bounty =>
        bounty._id === id
          ? (editedBounty = { ...bounty, ...editedBounty })
          : bounty
    );
    res.status(200).send(editedBounty);
  });

module.exports = bountyReducer;