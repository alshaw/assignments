const mongoose = require("mongoose");
const { Schema } = mongoose;

//schema is a constructor
//determines the template for all documents in a collection

const catSchema = new Schema ({
  name: String,
  age: Number,
  isNice: Boolean,
  breed: {
    required: true,
    type: String
  }, 
  adoptionStatus: {
    type: String,
    default: "not adopted."
  },
  agencyId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "agencies"
  }
})

const CatModel = mongoose.model("cats", catSchema);
module.exports = CatModel;



