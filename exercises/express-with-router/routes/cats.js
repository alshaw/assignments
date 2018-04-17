const express = require("express");
const uuid = require("uuid");
let cats = require("../catData.js");
const catRouter = express.Router();

catRouter.route("/")
  .get((req, res) => {
    const { query } = req;
    const queriedCats = cats.filter(cat => {
      for (let key in query) {
        if (
          !cat.hasOwnProperty(key) ||
          String(cat[key]).toLowerCase() !== query[key].toLowerCase()
        ) {
          return false;
        }
      }
      return true;
    });
    res.status(200).send(queriedCats);
  })
  .post((req, res) => {
    const newCat = req.body;
    newCat._id = uuid();
    cats.push(newCat);
    res.status(201).send(newCat);
  });

catRouter.route("/:id")
  .get((req, res) => {
    const { id } = req.params;
    console.log(id);
    const foundCat = cats.filter(cat => cat._id === id)[0];
    res.status(200).send(foundCat);
  })

  .delete((req, res) => {
    const { id } = req.params;
    cats = cats.filter(cat => cat._id !== id);
    res.status(204).send();
  })
  .put((req, res) => {
    const { id } = req.params;
    const editedCat = req.body;
    cats = cats.map(
      cat => (cat._id === id ? (editedCat = { ...cat, ...editedCat }) : cat)
    );
    res.status(200).send(editedCat);
  });

module.exports = catRouter;