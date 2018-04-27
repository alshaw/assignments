const express = require("express");
const camperRouter = express.Router();
const Camper = require("../models/campers.js");
const Spot = require("../models/spots.js")

camperRouter.get("/", (req, res) => {
  Camper.find((err, campers) => {
    if (err) return res.status(500).send(err);
    return res.send(campers);
  })
})

camperRouter.post("/", (req, res) => {
  const newCamper = new Camper(req.body);
  newCamper.save(err => {
    if (err) return res.status(500).send(err);
    return res.send(newCamper);
  })
})

camperRouter.get("/:id", (req, res) => {
  Camper.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedCamper) => {
    if (err) return res.status(500).send(err);
    return res.send(updatedCamper)
  })
})

camperRouter.put("/:id", (req, res) => {
  Camper.findByIdAndRemove(req.params.id, (err, removeCamper) => {
    if (err) return res.status(500).send(err);
    return res.send(removeSpot)
  })
})

module.exports = camperRouter;