const express = require("express");
const routes = express.Router();
const userRoutes = require("./product.route");

routes.use("/product", userRoutes);

module.exports = routes;
