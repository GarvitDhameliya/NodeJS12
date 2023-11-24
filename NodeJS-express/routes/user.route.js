const express = require("express");
const { userController } = require("../controllers");
const routes = express.Router();

routes.get("/get", userController.getUser);

module.exports = routes;
