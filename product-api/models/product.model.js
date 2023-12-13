const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    trim: true,
  },
  productDesc: {
    type: String,
    trim: true,
  },
  productPrice: {
    type: Number,
    // trim: true,
  },
});

const product = mongoose.model("productSchema", productSchema);

module.exports = product;
