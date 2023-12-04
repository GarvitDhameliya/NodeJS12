const { userController } = require(".");
const { userService } = require("../services");

const getUser = async (req, res) => {
  //   const body = req.body;
  const user = await userService.getUser();

  res.status(200).json({
    success: true,
    message: "data get successfully",
    data: user,
  });
  console.log(user);
};

const createUser = async (req, res) => {
  const body = req.body;

  console.log(body);

  const data = await userService.addUser(body);

  res.status(201).json({
    message: "user created success",
    data: data,
  });
};

module.exports = { getUser, createUser };
