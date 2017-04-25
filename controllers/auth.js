let model = require('../models')
let passwordHash = require('password-hash');
let jwt = require('jsonwebtoken');
require('dotenv').config()
let methods = {}

methods.signup = function(req, res) {
  req.body.password = passwordHash.generate(req.body.password)
  model.User.create({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      role: req.body.role
    })
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json(err)
    })
}

methods.signin = function(req, res) {
  model.User.find({
      where: {
        $or: [{
          username: req.body.username
        }, {
          email: req.body.email
        }]
      }
    })
    .then(record => {
      if (passwordHash.verify(req.body.password, record.password)) {
        let data = Object.assign({}, record.toJSON())
        delete data.id
        delete data.password
        delete data.createdAt
        delete data.updatedAt
        let token = jwt.sign(data, process.env.SECRET_KEY, {
          expiresIn: '1h'
        })
        res.json({
          message: 'Login is successful',
          token,
          data
        })
      } else {
        res.json({
          message: 'Your password is not matched'
        })
      }
    })
}

module.exports = methods
