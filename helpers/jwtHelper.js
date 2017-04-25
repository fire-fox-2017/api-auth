var jwt = require('jsonwebtoken');

module.exports = {
  sign: function(value) {
    var token = jwt.sign(JSON.stringify(value), 'secret');
    return token;
  },
  adminonly: function(req, res, next) {
    jwt.verify(req.headers.token, 'secret',
      function(err, decoded) {
        if (decoded) {
          if (decoded.role === 'admin') {
            next();
          } else {
            res.json({
              message: 'Authentication failed. Your Acces Denied.'
            });
          }
        } else {
          res.json({
            message: err
          });
        }
      });
  }
}
