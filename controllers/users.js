let model = require('../models');
let passwordHash = require('password-hash');
let methods = {}

methods.getAllUsers = function(req, res) {
  model.User.findAll()
    .then(dataAllUser => {
      res.json(dataAllUser)
    })
}

methods.getById = function(req, res) {
  model.User.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json(err)
    })
}

methods.createUser = function(req, res) {
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

methods.updateById = function(req, res) {
  model.User.find({
      where: {
        id: req.params.id
      }
    })
    .then(function(users) {
      if (users) {
        users.updateAttributes({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
          })
          .then(function(data) {
            res.json(data)
          })
          .catch(err => {
            res.json(err)
          })
      }
    });
}

methods.deleteById = function(req, res) {
  model.User.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(data) {
      res.json(data)
    })
    .catch(err => {
      res.json(err)
    })
}

module.exports = methods
