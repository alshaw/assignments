const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  issueId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Issue"
  },
  comment: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Comment", commentSchema);
