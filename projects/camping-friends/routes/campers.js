const express = require("express");
const camperRouter = express.Router();
const uuid = require("uuid");
const CamperModel = require("../models/campers.js");
let campers = require("../camperData.js");

camperRouter.route("/")
  .get((req, res) => {
    CamperModel.find(req.query)
    .populate("")
    .exec((err, foundCampers))
  })

module.exports = camperRouter;