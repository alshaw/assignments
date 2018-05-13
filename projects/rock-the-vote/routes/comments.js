const express = require("express");
const commentsRouter = express.Router();
const bodyParser = require("body-parser");
const Comment = require("../models/comment");
const Issue = require("../models/issue");

// GET route which queries by issueId
commentsRouter.get((req, res) => {
  Comment.find((err, comments) => {
    if (err) return res.status(500).send(err);
    return res.send(comments);
  })
})

commentsRouter.post("/", (req, res) => {
  const newComment = new Comment(req.body);
  Issue.findById(newComment.issueId, (err, issue) => {
    // return if cant find issue
    newComment.save(commentErr => {
      if (commentErr) return res.status(500).send(commentErr)
      issue.comments.push(newComment)

      issue.save(issueErr => {
        if (issueErr) return res.status(500).send(issueErr)
        return res.send(newComment)
      })
    })
  })
})

commentsRouter.get(":/id", (req, res) => {
  Comment.findById(req.params.id, req.body, {new: true}, (err, updatedComment) => {
    if (err) return res.status(500).send(err);
    return res.send(updatedComment);
  })
})

commentsRouter.put("/:id", (req, res) => {
  Comment.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedComment) => {
    if (err) return res.status(500).send(err);
    return res.send(updatedComment);
  })
})

commentsRouter.delete("/:id", (req, res) => {
  Comment.findByIdAndRemove(req.params.id, (err, removedComment) => {
    if (err) return res.status(500).send(err);
    return res.send(removedComment)
  })
})

module.exports = commentsRouter;
