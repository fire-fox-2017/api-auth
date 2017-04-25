const jwt = require('jsonwebtoken');
const model = require('../models');
require('dotenv').config();

module.exports = {
  auth: function(req, res, next) {
    jwt.verify(req.headers.token, process.env.SECRET_KEY, function(err, decoded) {
      if (decoded) {
        next()
      } else {
        res.send('You must login!')
      }
    })
  },
  isAdmin: function(req, res, next) {
    jwt.verify(req.headers.token, process.env.SECRET_KEY, function(err, decoded) {
      if (decoded) {
        model.User.find({
            where : {
              $or: [{ username: decoded.username }, { email: decoded.email }]
            }
          })
          .then((user) => {
            if (user.role == 'admin') {
              next()
            } else {
              res.send('You are not admin!')
            }
          })
      } else {
        res.send(err)
      }
    })
  }
}
