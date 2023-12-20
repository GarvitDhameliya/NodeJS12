const joi = require("joi");

const productValidate = () => {
  body: joi.object().keys({
    productName: joi.string().trim().required(),
    productDesc: joi.string().trim().required(),
    price: joi.number().trim().required(),
  });
};

module.exports = { productValidate };
