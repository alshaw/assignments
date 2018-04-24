const express = require("express");
const bountyRouter = express.Router();
const BountyModel = require("../models/bounties.js");
// const TeamModel = require("../models/teams.js")

bountyRouter.route("/")
  .get((req, res) => {
    BountyModel.find(req.query)
      // .populate("teamId")
      .exec((err, foundBounties) => {
        if (err) return res.send(err);
        res.status(201).send(foundBounties);
      })
  })
  .post((req, res) => {
    const newBounty = new BountyModel(req.body);
    newBounty.save((err, savedBounty) => {
      if (err) return res.send(err);
      BountyModel.populate(savedBounty, (err, popBounty) => {
        if (err) return res.send(err);
        res.status(201).send(popBounty);
      })
    })
  })

  bountyRouter.route("/:id")
    .get((req, res) => {
      BountyModel.findOne({ _id: req.params.id })
        // .populate("teamId")
        .exec((err, foundBounty) => {
          if (err) return res.send(err);
          if (!foundBounty) return res.status(404).send({ message: "Bounty not found" })
          res.status(200).send(foundBounty);
        })
    })
    .delete((req, res) => {
      BountyModel.findOneAndRemove({ _id: req.params.id }, (err, deletedBounty) => {
        if (err) return res.send(err);
        if (!deletedBounty) return res.status(404).send({ message: "Bounty not found"})
        res.status(204).send();
      })
    })
    .put((req, res) => {
      BountyModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        // .populate("teamId")
        .exec((err, updatedBounty) => {
          if(err) return res.send(err);
          if (!updatedBounty) return res.status(404).send({ message: "Bounty not found" });
          res.status(200).send(updatedBounty);
        })
    })

module.exports = bountyRouter;