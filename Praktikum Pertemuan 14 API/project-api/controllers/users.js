const User = require('../models/users')

async function findAll () {
  return await User.find({})
}

async function findOne (id) {
  return await User.findOne({ _id: id })
}

async function create (fullname, email, username, password) {
  return await User.create({
    fullname: fullname,
    email: email,
    username: username,
    password: password
  })
}

async function update (id, fullname, email, username, password) {
  return await User.updateOne({
    _id: id
  }, {
    fullname: fullname,
    email: email,
    username: username,
    password: password
  })
}

async function remove (id) {
  return await User.remove({ _id: id })
}

module.exports = {
  findAll,
  findOne,
  create,
  update,
  remove
}