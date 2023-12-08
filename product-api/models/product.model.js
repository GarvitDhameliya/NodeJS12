const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    require: true,
    trim: true,
  },
  productDesc: {
    type: String,
    require: true,
    trim: true,
  },
  productPrice: {
    type: Number,
    require: true,
    // trim: true,
  },
});

const product = mongoose.model("productSchema", productSchema);

module.exports = product;
