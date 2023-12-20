const { orderSchema } = require("../model");

const addOrder = (body) => {
  console.log(body);

  return orderSchema.create(body);
};

const getOrder = () => {
  return orderSchema.find().populate("order");
};
module.exports = { addOrder, getOrder };
