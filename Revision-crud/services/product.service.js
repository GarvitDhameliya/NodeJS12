const { productSchema } = require("../model");

const addProduct = (body) => {
  return productSchema.create(body);
};

const getProduct = () => {
  return productSchema.find();
};

module.exports = { addProduct, getProduct };
