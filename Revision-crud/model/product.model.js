const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
  },
  productDesc: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const product = mongoose.model("productSchema", productSchema);
module.exports = product;
