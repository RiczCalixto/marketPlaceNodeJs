const Joi = require('joi')

module.exports = {
  body: {
    name: Joi.string().required(),
    email: Joi.string()
      .required()
      .email()
      .required(),
    password: Joi.string()
      .required()
      .min(6)
  }
}
