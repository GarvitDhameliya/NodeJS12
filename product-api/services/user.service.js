const { userSchema } = require("../models");

const addUser = (body) => {
  return userSchema.create(body);
};

const getUserByFirstName = (firstName) => {
  //   console.log(firstName);
  return userSchema.findOne({ firstName });
};

const deleteUser = (id) => {
  // console.log(id, "id");

  return userSchema.findByIdAndDelete(id);
};

const updateUser = (id, body) => {
  return userSchema.findByIdAndUpdate(id, { $set: body });
};

module.exports = { addUser, getUserByFirstName, deleteUser, updateUser };
