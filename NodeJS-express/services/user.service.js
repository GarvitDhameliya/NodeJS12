const { userSchema } = require("../models");

const getUser = () => {
  return userSchema.find();
};

const addUser = (body) => {
  const user = new userSchema({
    firstname: body.firstname,
    lastname: body.lastname,
    age: body.age,
  });

  return user.save(body);
};

module.exports = { getUser, addUser };
