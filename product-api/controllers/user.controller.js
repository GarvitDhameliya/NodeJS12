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

const deleteUser = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const user = await userService.deleteUser(id);
    if (!user) {
      throw new Error("something went wrong");
    }

    res.status(200).json({
      message: "user delete success",
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    console.log(id, body);

    const userExist = await userService.getUserByFirstName(body.firstName);

    if (userExist) {
      throw new Error("user already existed");
    }

    const user = await userService.updateUser(id, body);

    res.status(200).json({
      message: "user updated success",
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = { addUser, deleteUser, updateUser };
