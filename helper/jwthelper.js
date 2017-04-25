var jwt = require('jsonwebtoken');
var methode ={}

  methode.check_token = (req, res, next) =>{
    jwt.verify(req.headers.token, 'secret', (err, decoded) =>{
      if(decoded){
        if(decoded.access === 'admin'){
          next();
        }
      }else{
        res.send('tes')
      }
    })
  }

module.exports = methode
