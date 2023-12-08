const { productSchema } = require("../models");

const addProduct = (body) => {
  console.log(body);
  const product = new productSchema({
    productName: body.productName,
    productDesc: body.productDesc,
    productPrice: body.productPrice,
  });

  return product.save(body);
};

const getProduct = () => {
  return productSchema.find();
};

const deleteProduct = (id) => {
  return productSchema.findByIdAndDelete(id);
};

module.exports = { addProduct, getProduct, deleteProduct };
