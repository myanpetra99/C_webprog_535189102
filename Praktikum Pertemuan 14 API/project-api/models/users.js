const mongoose = require('mongoose')

const users = mongoose.model('users', new mongoose.Schema({
  username: String,
  fullname: String,
  email: String,
  password: String
}))

module.exports = users