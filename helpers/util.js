'use strict';

var jwt = require('jsonwebtoken');
var models = require('../models');
var util = {};

util.isValidAdmin = (req,res,next) => {
  jwt.verify(req.headers.token, 'secret', (err,decoded) => {
    if (decoded) {
      if (decoded.role == 'admin') {
        next();
      } else {
        res.send('You are not authorized')
      }
    } else {
      res.send(err)
    }
  })
}

util.isValidUserOrAdmin = (req,res,next) => {
  jwt.verify(req.headers.token, 'secret', (err,decoded) => {
    if (decoded) {
      if (decoded.role == 'admin' || decoded.role == 'user') {
        next();
      } else {
        res.send('You are not authorized')
      }
    } else {
      res.send(err)
    }
  })
}

module.exports = util;
