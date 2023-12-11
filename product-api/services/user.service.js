const { userSchema } = require("../models");

const addUser = (body) => {
  return userSchema.create(body);
};

const getUserByFirstName = (firstName) => {
  //   console.log(firstName);
  return userSchema.findOne({ firstName });
};

module.exports = { addUser, getUserByFirstName };
