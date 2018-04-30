const mongoose = require("mongoose");

const { Schema } = mongoose;

const itemSchema = new Schema({
  description: {
    type: String, 
    required: true
  },
  price: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Item", itemSchema);

