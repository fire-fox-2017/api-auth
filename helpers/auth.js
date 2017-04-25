const jwt = require('jsonwebtoken');
const methods = {};


methods.adminAuth = (req, res, next) => {
  jwt.verify(req.headers.token, 'secret', (err, decoded) => {
    if(decoded) {
      if(decoded.is_admin === 'admin') {
        next();
      } else {
        res.send({message: 'You are not an admin!'});
      }
    } else {
      res.send({message: 'Password is wrong!'});
    } 
  })
}

methods.allAuth = (req, res, next) => {
  jwt.verify(req.headers.token, 'secret', (err, decoded) => {
    if(decoded) {
      if(decoded.is_admin === 'admin' || decoded.is_admin === 'user') {
        next()
      } else {
        res.send({message: 'You are not admin or user!'});
      }
    } else {
      res.send(err);
    }
  })
}


module.exports = methods;