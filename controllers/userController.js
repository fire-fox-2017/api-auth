'use strict';

var models = require('../models');
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');

var methods = {};

methods.getAllUsers = (req,res,next) => {
  models.User.findAll()
  .then(data => {
    res.json(data)
  })
}

methods.getOneUser = (req,res,next) => {
  models.User.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(data => {
    res.json(data)
  })
}

methods.createUser = (req,res,next) => {
  models.User.create({
    username: req.body.username,
    password: passwordHash.generate(req.body.password),
    name: req.body.name,
    email: req.body.email,
    role: req.body.role || 'user'
  })
  .then(data => {
    res.json(data)
  })
}

methods.updateUser = (req,res,next) => {
  models.User.update({
      username: req.body.username,
      password: passwordHash.generate(req.body.password) || req.body.password,
      name: req.body.name,
      email: req.body.email,
      role: req.body.role || 'user'
    },{
    where : {
      id : req.params.id
    }
  })
  .then(data => {
    res.json(data)
  })
}

methods.deleteUser = (req,res,next) => {
  models.User.destroy({
    where : {
      id : req.params.id
    }
  })
  .then(data => {
    res.json(data);
  })
}

methods.signUp = (req,res,next) => {
  models.User.create({
    username: req.body.username,
    password: passwordHash.generate(req.body.password),
    name: req.body.name,
    email: req.body.email,
    role: 'user'
  })
  .then(data => {
    res.json(data)
  })
}

methods.signIn = (req,res,next) => {
  models.User.findOne({
    where: {
      username: req.body.username
    }
  })
  .then(data => {
    if (data === null) {
      res.send('User not found')
    } else {
      if (passwordHash.verify(req.body.password, data.password)) {
        var token = jwt.sign({
          username : data.username,
          role : data.role
        }, 'secret', {
          expiresIn : '3h'
        })
        res.send(token)
      } else {
        res.send('Password unmatch')
      }
    }
  })
}

module.exports = methods;
