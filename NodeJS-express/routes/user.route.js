const express = require("express");
const { userController } = require("../controllers");
const routes = express.Router();

routes.get("/get", userController.getUser);
routes.post("/create", userController.createUser);

module.exports = routes;
