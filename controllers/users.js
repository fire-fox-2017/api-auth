const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
const pass = require('../node_modules/password-hash/lib/password-hash');
const db = require('../models');


let controller = {}

controller.signup = function (req, res, next) {
  let hash = passwordHash.generate(req.body.password);
  db.User.create({
    name : req.body.name,
    password : hash,
    role : req.body.role
  })
  .then((user)=>{
    res.send(user)
  })
  .catch((err)=>{
    res.send(err.message)
  })
}

controller.signin = function (req, res, next) {
  db.User.findOne({
    where : {name : req.body.name}
  })
  .then((user)=>{
    let hashed = passwordHash.verify(req.body.password, user.password)
    // res.send(hashed)
    if(hashed){
      let token = jwt.sign({
        username: user.name,
        role: user.role },'secret', { expiresIn: '1h' })
      res.send(token)
    } else {
      res.send('Password Salah')
    }
  })
  .catch((err)=>{
    res.send('Username Salah')
  })
}

controller.findall = function(req, res, next) {
  let decode = jwt.decode(req.headers.token)
  jwt.verify(req.headers.token, 'secret', function(err,decode){
    if(err){
      res.send(err.name)
    } else {
      if(decode.role == 'admin'){
        db.User.findAll()
          .then((users)=>{
            res.send(users)
          })
          .catch((err)=>{
            res.send(err)
          })
      } else {
        res.send('You do not have permission')
      }
    }
  })

}

controller.find = function(req, res, next) {
  let decode = jwt.decode(req.headers.token)
  jwt.verify(req.headers.token, 'secret', (err, decode)=>{
    if(err){
      res.send(err.name)
    } else {
      db.User.findById(req.params.id)
        .then((user)=>{
          res.send(user)
        })
        .catch((err)=>{
          res.send(err)
        })
    }
  })
}

controller.create = function(req, res, next) {
  let decode = jwt.decode(req.headers.token)
  jwt.verify(req.headers.token, 'secret', (err, decode)=>{
    if(err){
      res.send(err.name)
    } else if(decode.role == 'admin'){
      let hash = passwordHash.generate(req.body.password);
      db.User.create({
        name : req.body.name,
        password : hash,
        role : req.body.role
      })
        .then((users)=>{
          res.send(users)
        })
        .catch(err =>{
          res.send(err)
        })
    } else {
      res.send(`You don't have permission`)
    }
  })

}

controller.delete = function(req, res, next) {
  let decode = jwt.decode(req.headers.token)
  jwt.verify(req.headers.token, 'secret', (err, decode)=>{
    if(err){
      res.send(err.name)
    } else if(decode.role == 'admin'){
      db.User.destroy({
        where : {id : req.params.id}
      })
        .then((users)=>{
          res.send('done')
        })
        .catch((err)=>{
          res.send(err)
        })
    } else {
      res.send(`You don't have permission`)
    }
  })

}

controller.update = function(req, res, next) {
  let decode = jwt.decode(req.headers.token)
  jwt.verify(req.headers.token, 'secret', (err, decode)=>{
    if(err){
      res.send(err.name)
    } else {
      db.User.update({
        name : req.body.name,
        email : req.body.email
      },{where : {id : req.params.id}})
        .then((users)=>{
          res.send(users)
        })
        .catch((err)=>{
          res.send(err)
        })
    }
  })
}


module.exports = controller;