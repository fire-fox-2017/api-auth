const db = require('../models');
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
const authHelpers = require('../helpers/auth');
const methods = {};

methods.getAll = (req, res) => {
  db.User.findAll()
  .then(users => {
    res.send(users);
  })
  .catch(err => {
    res.send(err);
  })
}

methods.findId = (req, res) => {
  db.User.findById(req.params.id)
  .then(user => {
    res.send(user);
  })
  .catch(err => {
    res.send(err);
  })
}

methods.signUp = (req, res, next) => {
  db.User.create({
    username: req.body.username,
    password:passwordHash.generate(req.body.password),
    is_admin: req.body.role})
  .then(() => {
    res.send('success sign up a new user');
  })
  .catch(err => {
    res.send(err);
  })
}

methods.signIn = (req, res, next) => {
  db.User.findOne({where: {username: req.body.username}})
  .then(user => {
    if(passwordHash.verify(req.body.password, user.password)) {
      var token = jwt.sign({username: user.username, is_admin: user.is_admin, id:user.id}, 'secret', {expiresIn: '1h'});
      res.send(token);
    } else {
      res.send('Password is wrong');
    }
  })
  .catch(err => {
    res.send(err);
  })
}

module.exports = methods;