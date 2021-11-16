const joi = require("@hapi/joi");

// validate registration using hapi/joi
const register = (data) => {
  const joiRegistrationSchema = joi.object({
    username: joi.string().required().min(3).max(25),
    email: joi.string().required().email(),
    password: joi.string().required().min(3).max(20),
  });

  return joiRegistrationSchema.validate(data);
};

module.exports.register = register;

// validate login using hapi/joi
const login = (data) => {
  const joiLoginSchema = joi.object({
    email: joi.string().required().email(),
    password: joi.string().required().min(3).max(20),
  });

  return joiLoginSchema.validate(data);
};
module.exports.login = login;

// validate car data using hapi/joi
const carData = (data) => {
  const joiCarDataSchema = joi.object({
    name: joi.string().required().min(3).max(20),
    model: joi.string().required(),
    color: joi.string().required(),
    engine: joi.string().required(),
  });

  return joiCarDataSchema.validate(data);
};
module.exports.carData = carData;
