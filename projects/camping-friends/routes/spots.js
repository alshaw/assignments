const express = require("express");
const spotsRouter = express.Router();
const Spot = require("../models/spots");


spotsRouter.get("/", (req, res) => {
  Spot.find((err, spots) => {
    if (err) return res.status(500).send(err);
    return res.send(spots)
  })
})

spotsRouter.post("/", (req, res) => {
  const newSpot = new Spot(req.body);
  newSpot.save(err => {
    if (err) return res.status(500).send(err);
    return res.send(newSpot);
  })
})

spotsRouter.get("/:id", (req, res) => {
  Spot.findById(req.params.id, (err, product) => {
    if (err) return res.status(500).send(err);
    return res.send(spot);
  })
})

spotsRouter.put("/:id", (req, res) => {
  Spot.findbyIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedSpot) => {
    if (err) return res.status(500).send(err);
    return res.send(updatedSpot);
  })
})

spotsRouter.delete("/:id", (req, res) => {
  Spot.findByIdRemove(req.params.id, (err, removedSpot) => {
    if (err) return res.status(500).send(err);
    return res.send(removedSpot);
  })
})

module.exports = spotsRouter;