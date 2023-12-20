const express = require("express");

const routes = express.Router();
const productRoute = require("./product.route");
const orderRoute = require("./order.route");

routes.use("/product", productRoute);

routes.use("/order", orderRoute);

module.exports = routes;
