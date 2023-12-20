const express = require("express");
const { productController } = require("../controllers");
const validate = require("../middleware/validate");
const { productVaidation } = require("../validation");
const route = express.Router();

route.post(
  "/add",
  validate(productVaidation.productValidate),
  productController.addProduct
);

route.get("/get", productController.getProduct);

module.exports = route;
