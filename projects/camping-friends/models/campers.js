const mongoose = require("mongoose");

const { Schema } = mongoose;

const camperSchema = new Schema({
  name: {
    type: String, 
    required: true
  },
  spots: [{
    type: Schema.Types.ObjectId,
    ref: "Spots"
  }]
});

module.exports = mongoose.model("Camper", camperSchema);

