const express = require("express");
const routes = express.Router();
const productRoutes = require("./product.route");
const userRoutes = require("./user.route");

routes.use("/product", productRoutes);
routes.use("/user", userRoutes);

module.exports = routes;
