const { userService } = require("../services");

const addUser = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const userExist = await userService.getUserByFirstName(body.firstName);

    if (userExist) {
      throw new Error("user already exist");
    }

    const user = await userService.addUser(body);

    if (!user) {
      throw new Error("something went wrong");
    }

    res.status(201).json({
      message: "user Created success",
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
    // res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { addUser };
