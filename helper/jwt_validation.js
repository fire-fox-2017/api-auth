var jwt = require('jsonwebtoken')
const methods = {}

methods.verifyLogin = function(req,res, next){
  jwt.verify(req.headers.token, 'secret', function(err, decoded){
    if(!err){
      if(decoded.role == 'admin' || decoded.id == req.params.id){
        next()
      }
      else{
        res.send('Anda Tidak punya Akses')
      }
    }
    else {
      res.send(err)
    }
  })
}

methods.verifyAdmin = function(req,res, next){
  jwt.verify(req.headers.token, 'secret', function(err, decoded){
    if(!err){
      if(decoded.role == 'admin'){
        next()
      }
      else{
        res.send('Anda Bukan Admin')
      }
    }
    else {
      res.send(err)
    }
  })
}

module.exports = methods