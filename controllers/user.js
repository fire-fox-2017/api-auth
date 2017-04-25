const db = require('../models')
const methods = {}
const passwordHash = require('password-hash')
const jwt = require('jsonwebtoken')
const jwtHelpers = require('../helpers/jwt')

methods.signup = function(req, res, next) {
  let pass = passwordHash.generate(req.body.password)
  db.Contact.create(
    {name: req.body.name, user_name: req.body.user_name, password: pass, role: req.body.role, phone: req.body.phone}
  ) .then(data => {
    res.send("data berhasil ditambahkan !")
  })
  .catch( error => {
    res.json({error})
  })
}//signup
// passwordHash.verify('password123', hashedPassword)
methods.signin = function(req, res, next) {
  db.Contact.findOne({ where: {user_name:req.body.user_name} })
    .then(user => {
      if( passwordHash.verify(req.body.password, user.password) ) {
        let token = jwt.sign({user_name: user.user_name, role: user.role}, 'secret', {expiresIn:'1h'})
        res.send(token)
      } else {
        res.send('password salah')
      }
    })
}//signin


// router.get('/', userController.getAll );
methods.getAll = function(req, res, next) {
  db.Contact.findAll()
    .then( user => {
      res.json(user)
    })
    .catch( error => {
      res.json({error})
    })
}// getAll

// router.get('/:id', userController.getById );
methods.getById = function(req, res, next) {
  db.Contact.findById(req.params.id)
    .then( contact => {
      res.json(contact)
    })
    .catch( error => {
      res.json({error})
    })// getByd
}
// router.post('/', userController.createUser );
methods.createUser = function(req, res, next) {
  let pass = passwordHash.generate(req.body.password)
  db.Contact.create(
    {name: req.body.name, user_name: req.body.user_name, password: pass, role: req.body.role, phone: req.body.phone}
  ) .then(data => {
      res.send("data berhasil ditambahkan !")
    })
    .catch( error => {
      res.json({error})
    })
}//createUser

// router.delete('/:id', userController.deleteById );
methods.deleteById = function(req, res, next) {
  db.Contact.destroy({
    where: {id:req.params.id}
  })
    .then( contact => {
      res.send("berhasil dihapus")
    })
    .catch( error => {
      res.json({error})
    })
}
// router.put('/:id', userController.updateById );
methods.updateById = function(req, res, next) {
  let pass = passwordHash.generate(req.body.password)
  db.Contact.update({
    name: req.body.name,
    user_name: req.body.user_name,
    password: pass,
    role: req.body.role,
    phone: req.body.phone
  },{
    where: {id:req.params.id}
  })
    .then( contact => {
      res.send('berhasil di update')
    })
    .catch( error => {
      res.json({error})
    })
}
module.exports = methods
