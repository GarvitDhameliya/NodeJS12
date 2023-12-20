const express = require("express");
const { orderController } = require("../controllers");
const route = express.Router();

route.post("/add", orderController.addOrder);
route.get("/getorder", orderController.getOrder);

module.exports = route;
