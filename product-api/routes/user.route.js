const express = require("express");
const validate = require("../middlewares/validate");
const { userValidation } = require("../validations");
const { userController } = require("../controllers");

const route = express.Router();

route.post("/add", validate(userValidation.addUser), userController.addUser);
route.delete("/delete/:id", userController.deleteUser);
route.put(
  "/update/:id",
  validate(userValidation.addUser),
  userController.updateUser
);
module.exports = route;
