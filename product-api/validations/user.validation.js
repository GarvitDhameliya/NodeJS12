const Joi = require("joi");

/** add user */
const addUser = {
  body: Joi.object().keys({
    firstName: Joi.string().required().trim(),
    lastName: Joi.string().required().trim(),
    age: Joi.number().required(),
  }),
};

module.exports = {
  addUser,
};
