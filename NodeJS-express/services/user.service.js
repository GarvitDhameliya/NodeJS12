const { userSchema } = require("../models");

const getUser = () => {
  return userSchema.find();
};

module.exports = { getUser };
