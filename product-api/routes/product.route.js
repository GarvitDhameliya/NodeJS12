const express = require("express");
const { productController } = require("../controllers");
const route = express.Router();

route.post("/add", productController.addProduct);
route.get("/get", productController.getProduct);
route.delete("/delete/:id", productController.deleteProduct);

module.exports = route;
