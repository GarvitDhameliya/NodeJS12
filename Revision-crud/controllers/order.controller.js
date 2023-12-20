const { orderService } = require("../services");

const addOrder = async (req, res) => {
  const body = req.body;

  const order = await orderService.addOrder(body);

  res.status(200).json({
    message: "order add success",
    data: order,
  });
};

const getOrder = async (req, res) => {
  const order = await orderService.getOrder();

  res.status(200).json({
    message: "order get success",
    data: order,
  });
};

module.exports = { addOrder, getOrder };
