// const express = require("express");
// const teamRouter = express.Router();

// const TeamModel = require("../models/teams.js");

// teamRouter.route("/")
//   .get((req, res) => {
//     TeamModel.find(req.query, (err, foundBounties) => {
//       if (err) return res.send(err);
//       res.status(200).send(foundBounties);
//     })
//   })
//   .post((req, res) => {
//     const newTeam = TeamModel(req.body);
//     newTeam.save((err, savedTeam) => {
//       if (err) return res.send(err);
//       res.status(201).send(savedTeam);
//     })
//   })

// module.exports = teamRouter;