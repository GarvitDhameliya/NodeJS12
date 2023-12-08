const { productService } = require("../services");

const addProduct = async (req, res) => {
  const body = req.body;

  console.log(body);

  const product = await productService.addProduct(body);

  console.log(product, "controller");

  res.status(201).json({
    message: "product created success",
    data: product,
  });
};

const getProduct = async (req, res) => {
  const product = await productService.getProduct();

  console.log(product, "get");

  res.status(200).json({
    message: "product get success",
    data: product,
  });
};

const deleteProduct = async (req, res) => {
  // console.log(req.params.id);

  let id = req.params.id;

  const product = await productService.deleteProduct(id);

  // if (!product) {
  //   res.status(404).json({
  //     message: "product not found",
  //   });
  // }

  console.log(product, "delete");

  res.status(200).json({
    message: "product delete success",
    data: product,
  });
};

module.exports = { addProduct, getProduct, deleteProduct };
