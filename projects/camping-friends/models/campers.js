const mongoose = require("mongoose");

const { Schema } = mongoose;

const camperSchema = new Schema({
  name: String,
  favCampingSpot: String,
})

const CamperModel = mongoose.model("campers", camperSchema);
module.exports = CamperModel;