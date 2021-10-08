const joi = require("@hapi/joi");

// validate registration
const register = (data) => {
  const schema = joi.object({
    username: joi.string().required().min(3).max(25),
    email: joi.string().required().email(),
    password: joi.string().required().min(3).max(20),
  });

  return schema.validate(data);
};

module.exports.register = register;

// validate login
const login = (data) => {
  const schema = joi.object({
    email: joi.string().required().email(),
    password: joi.string().required().min(3).max(20),
  });

  return schema.validate(data);
};

module.exports.login = login;
