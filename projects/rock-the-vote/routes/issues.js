const express = require("express");
const issueRouter = express.Router();
const bodyParser = require("body-parser");
const Issue = require("../models/issue.js");

issueRouter.get("/", (req, res) => {
  Issue.find()
  .populate("comments")
  .exec((err, issues) => {
    if (err) return res.status(500).send(err)
    return res.send(issues)
  })
})

issueRouter.post("/", (req, res) => {
  const newIssues = new Issue(req.body);
  newIssues.save(err => {
    if (err) return res.status(500).send(err)
    return res.send(newIssues)
  })
})

issueRouter.get("/:id", (req, res) => {
  Issue.findById(req.params.id)
    .populate("comments")
    .exec((err, issue) => {
      if (err) return res.status(500).send(err)
      return res.send(issue)
    })
})

issueRouter.put("/:id", (req, res) => {
  Issue.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedIssue) => {
    if (err) return res.status(500).send(err)
    return res.send(updatedIssue)
  })
})

issueRouter.delete("/:id", (req, res) => {
  Issue.findByIdAndRemove(req.params.id, (err, removedIssue) => {
    if (err) return res.status(500).send(err)
    return res.send(removedIssue)
  })
})

module.exports = issueRouter;
