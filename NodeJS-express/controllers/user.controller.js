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

module.exports = { getUser };
