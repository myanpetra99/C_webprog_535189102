// crud users api
// axios untuk crud
// login
// jwt passport

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

// enable cross origin resource sharing to all origins by default
app.use(cors())

// middleware that transforms the raw string of req.body into json
app.use(bodyParser.json())

// connect to mongoose database
mongoose.connect(
  'mongodb+srv://jansonh:AjLE8PjKEVVNvmkM@cluster0.4bffm.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
)

// check db connection
const db = mongoose.connection
db.once('open', () => {
  console.log("Successfully connected to MongoDB using Mongoose!")
})

// define URL routes
const users = require('./api/routes/users')
app.use('/users', users)

// error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    errors: {
      message: err.message
    }
  })
})

// listen to port
app.listen(9999)
console.log('Server runs at port 9999')