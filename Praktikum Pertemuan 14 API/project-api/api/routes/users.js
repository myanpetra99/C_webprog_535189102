const express = require('express');
const { celebrate } = require('celebrate')

const UserController = require('../../controllers/users')
const UserValidator = require('../validators/users');

const router = express.Router()

// find all users
router.get('/',
  async (req, res) => {
    const users = await UserController.findAll()
    return res.json(users)
  }
)

// get user detail
router.get('/:id',
  async (req, res) => {
    const id = req.params.id
    const user = await UserController.findOne(id)
    return res.json(user)
  }
)

// create new user
router.post('/',
  celebrate(UserValidator.createUser),
  async (req, res) => {
    // TODO: hash password for secure storage
    await UserController.create(
      req.body.fullname,
      req.body.email,
      req.body.username,
      req.body.password
    )
    return res.json({ status: 'OK' })
  }
)

// update user
router.put('/:id', 
  async (req, res) => {
    // TODO: hash password for secure storage
    await UserController.update(
      req.params.id,
      req.body.fullname,
      req.body.email,
      req.body.username,
      req.body.password
    )
    return res.json({ status: 'OK' })
  }
)

// delete user
router.delete('/:id',
  async (req, res) => {
    await UserController.remove(req.params.id)
    return res.json({ status: 'OK' })
  }
)

module.exports = router