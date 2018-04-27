const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const spotsSchema = new Schema({
  name: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model("Spot", spotsSchema);