var db = require('../models');
var passwordHash = require('password-hash')
var jwt = require('jsonwebtoken')
const methods = {}

methods.signUp = function(req,res){
  db.User.create({
    username:req.body.username,
    password:passwordHash.generate(req.body.password),
    role:"user",
    name:req.body.name
  })
  .then((user)=>{
    res.send(user)
  })
}// CREATE USER SIGN UP

methods.signIn = function(req,res){
  db.User.findOne({where : {username:req.body.username}})
          .then((user)=>{
            if(passwordHash.verify(req.body.password, user.password)){
              let token = jwt.sign({id:user.id, username: user.username, role: user.role}, 'secret', {expiresIn:'6h'})
              res.send(token)
            }
            else{
              res.send('password tidak cocok')
            }
          })
}// SIGN IN (LOGIN)

methods.getAllUser = function(req,res){
  db.User.findAll()
  .then((users)=>{
    res.send(users)
  })
}// GET ALL USERS

methods.getSingleUser = function(req,res){
  db.User.findById(req.params.id)
  .then((user)=>{
    res.send(user)
  })
}// FIND SINGLE USER

methods.createUser = function(req,res){
  db.User.create({
    username:req.body.username,
    password:passwordHash.generate(req.body.password),
    name:req.body.name,
    role:"user"
  })
  .then((user)=>{
    res.send(user)
  })
}// CREATE USER

methods.deleteUser = function(req,res){
  db.User.destroy({where : { id : req.params.id }} )
  .then(()=>{
    res.send('berhasil hapus')
  })
}// Delete USER

methods.updateUser = function(req,res){
  db.User.update({username: req.body.username, password:passwordHash.generate(req.body.password), role:req.body.role}, {where : { id : req.params.id }} )
  .then(()=>{
    res.send('berhasil update')
  })
}// Delete USER

module.exports = methods