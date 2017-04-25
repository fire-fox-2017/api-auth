const jwt = require('jsonwebtoken');
// require('dotenv').config()

const jwtHelpers = {}


  jwtHelpers.isAdmin = function(req, res, next) {
    // jwt.verify(req.headers.token, process.env.SECRET_KEY,
    jwt.verify(req.headers.token, 'secret',
    function(err, decoded) {
      if(decoded) {
        if(decoded.role == 'admin'){
          // res.send('berhasil')
          next()
        }
      } else {
        res.send(err)
      }
    })
  }
  jwtHelpers.isLogin = function(req, res, next) {
    // jwt.verify(req.headers.token, process.env.SECRET_KEY,
    jwt.verify(req.headers.token, 'secret',
    function(err, decoded) {
      if(decoded) {
        if(decoded.role == 'admin' || decoded.role == 'user'){
          // res.send('berhasil')
          next()
        }
      } else {
        res.send(err)
      }
    })
  }
module.exports = jwtHelpers
