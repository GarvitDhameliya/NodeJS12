const { productService } = require("../services");

const addProduct = async (req, res) => {
  console.log(req.body);

  const body = req.body;

  const product = await productService.addProduct(body);

  console.log(product);

  res.status(200).json({
    message: "product create succeess",
    data: product,
  });
};

const getProduct = async (req, res) => {
  const product = await productService.getProduct();

  res.status(200).json({
    message: "product get success",
    data: product,
  });
};

module.exports = { addProduct, getProduct };
