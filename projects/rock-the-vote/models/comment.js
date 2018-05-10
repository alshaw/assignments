const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  issueId: {
    type: String,
    // ref: "Issue"
  }
});

module.exports = mongoose.model("Comment", commentSchema);
