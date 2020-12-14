const Joi = require('@hapi/joi')

module.exports = {
  createUser: {
    body: {
      fullname: Joi.string().max(200).required(),
      email: Joi.string().email().required(),
      username: Joi.string().min(3).max(32).required(),
      password: Joi.string().min(6).max(32).required()
    }
  },
  updateUser: {
    body: {
      fullname: Joi.string().max(200).required(),
      email: Joi.string().email().required(),
      username: Joi.string().min(3).max(32).required(),
      password: Joi.string().min(6).max(32).required()
    }
  }
}