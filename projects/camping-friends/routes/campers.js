const express = require("express");
const camperRouter = express.Router();
const uuid = require("uuid");
const CamperModel = require("../models/campers.js");
let campers = require("../camperData.js");

camperRouter.route("/")
  .get((req, res) => {
    const { query } = req;
    const queriedCampers = campers.filter(camper => {
      for (let key in query) {
        if (
          !cat.hasOwnProperty(key) ||
          String(cat[key]).toLowerCase() !== query[key].toLowerCase()
        ) {
          return false;
        }
      }
      return true;
    })
    res.status(200).send(foundCampers);
  })
  .post((req, res) => {
    const newCamper = req.body;
    newCamper._id = uuid();
    campers.push(newCamper);
    res.status(201).send(newCamper);
  })

camperRouter.route("/:id")
  .get((req, res) => {
    const { id } = req.params;
    console.log(id);
    const foundCamper = camper.filter(camper => camper._id === id)[0];
    res.status(200).send(foundCamper)
  })
  .delete((req, res) => {
    const { id } = req.params;
    campers = campers.filter(camper => camper._id !== id);
    res.status(204).send();
  })
  .put((req, res) => {
    const { id } = req.params;
    const editedCamper = req.body;
    campers = campers.map(
      camper => (cat._id === id ? (editedCamper = {...camper, ...editedCamper }) : camper)
    );
    res.status(200).send(editedCamper);
  })

module.exports = camperRouter;