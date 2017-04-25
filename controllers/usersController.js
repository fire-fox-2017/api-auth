const models = require('../models');
const passHash = require('password-hash');

var methode = {}

methode.getAllData = function(req, res, next) {
  models.User.findAll({})
  .then((query)=>{
    res.send(query)
  })
} ;

methode.getDataById = function(req, res, next) {
  models.User.findOne({
    where : {
      id : req.params.id
    }
  })
  .then((query)=>{
    res.send(query)
  })
} ;

methode.insert = (req, res, next)=>{
  models.User.create({
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    dateofbirth : req.body.dateofbirth,
    gender : req.body.gender,
    username : req.body.username,
    password : passHash.generate(req.body.password),
    access : req.body.access || 'user'
  })
  .then((query)=>{
    res.send(query)
  })
};

methode.delete = (req, res, next)=>{
  models.User.destroy({
    where :{
      id : req.params.id
    }
  })
  .then(()=>{
    res.send("Data Deleted with id : "+req.params.id)
  })
};

methode.updates = (req, res, next)=>{
  models.User.update({
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    dateofbirth : req.body.dateofbirth,
    gender : req.body.gender,
    username : req.body.username,
    password : passHash.generate(req.body.password),
    access : req.body.access,
    updatedAt : new Date()
  },{
    where : {
      id : req.params.id
    }
  })
  .then((query)=>{
    res.send(query)
  })
};

methode.login = (req, res, next)=>{
  models.User.findOne({
    where :{
      username : req.body.username
    }

  })
  .then((query)=>{
    if(passHash.verify(req.body.password, query.password)){
      if(query.access === 'admin'){
        next()
      }
    }else{
      res.send('username or password is wrong')
    }
  })
}
module.exports = methode
