var jwt = require('jsonwebtoken');
var methode ={}

  methode.check_token = (req, res, next) =>{
    jwt.verify(req.headers.token, 'secret', (err, decoded) =>{
      if(decoded){
        if(decoded.access === 'admin'){
          next();
        }else{
          res.send('You can not access')
        }
      }else{
        res.send('tes')
      }
    })
  }

  methode.check_token_global = (req, res, next) =>{
    jwt.verify(req.headers.token, 'secret', (err, decoded) =>{
      if(decoded){
        if(decoded.access === 'admin' || decoded.access === 'user' ){
          next();
        }else{
          res.send('You can not access')
        }
      }else{
        res.send('tes')
      }
    })
  }

module.exports = methode
