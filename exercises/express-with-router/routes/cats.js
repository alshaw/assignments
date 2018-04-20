const express = require("express");
const catRouter = express.Router();
const CatModel = require("../models/cats.js");
const AgencyModel = require("../models/agencies");

catRouter.route("/")
  .get((req, res) => {
    // CatModel.findById(req.params.id, () => {})
    CatModel.find(req.query)
      .populate("agencyId")
      .exec((err, foundCats) => {
        if (err) return res.send(err);
        res.status(200).send(foundCats);
      })
  })
  .post((req, res) => {
    //use save()
    const newCat = new CatModel(req.body);
    newCat.save((err, savedCat) => {
      if (err) return res.send(err);    
      CatModel.populate(savedCat, { path: "agencyId" }, (err, popCat) => {
        if (err) return res.send(err);
        res.status(201).send(popCat);
      })
  });

catRouter.route("/:id")
  .get((req, res) => {
    //use fineOne()
    CatModel.findOne({ _id: req.params.id })
      .populate("agencyId")
      .exec((err, foundCat) => {
        if (err) return res.send(err);
        if (!foundCat) return res.status(404).send({ message: "Cat not found" });
        res.status(200).send(foundCat);
    })
  })

  .delete((req, res) => {
    //use findByIdAndDelete()
    CatModel.findOneAndRemove({ _id: req.params.id }, (err, deletedCat) => {
        if (err) return res.send(err);
        if (!deletedCat) return res.status(404).send({ message: "Cat not found" }) 
    })
  })
  .put((req, res) => {
    CatModel.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true})
      .populate("agencyId")
      .exec((err, updatedCat) => {
        if (err) return res.send(err);
        if (!updatedCat) return res.status(404).send({ message: "cat not found" });
        res.status(200).send(updatedCat);
      })

      })
  });

module.exports = catRouter;