const mongoose = require("mongoose");

const { Schema } = mongoose;

const bountySchema = new Schema({
  firstName: String,
  lastName: String,
  living: Boolean,
  bountyAmount: Number, 
  type: String,
  // teamId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: "teams"
  // }
})

const BountyModel = mongoose.model("bounties", bountySchema);
module.exports = BountyModel;