var db = require('../models');
var passwordHash = require('password-hash');


let control = {
  signUp: (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let role = req.body.role;
    if (username !== null && password !== null && role !== null) {
      let hashedPassword = passwordHash.generate(password);
      db.User.create({username:username, password:hashedPassword, role:role}).then((data) => {
        res.send(data);
      }).catch((err) => {
        res.send(err);
      });
    } else {
      res.send('username and password must not be empty')
    }
  },
  signIn: (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    db.User.findOne({where: {username:username}})
      .then((user) => {
        if (passwordHash.verify(password, user.password)) {
          res.send(user);
        } else {
          res.send('incorrect password');
        }
      }).catch((err) => {
        res.send('username is not registered');
      });
  },
  findAll: (req, res) => {
    db.User.findAll().then((data) => {
      res.send(data);
    }).catch((err) => {
      res.send(err);
    });
  },
  findById: (req, res) => {
    let id = req.params.id;
    db.User.findById(id).then((data) => {
      res.send(data);
    }).catch((err) => {
      res.send(err);
    });
  },
  create: (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let role = req.body.role;
    if (username !== null && password !== null && role !== null) {
      db.User.create({username:username, password:password, role:role}).then((data) => {
        res.send(data);
      }).catch((err) => {
        res.send(err);
      });
    } else {
      res.send('username, password, role must not be empty')
    }
  },
  delete: (req, res) => {
    let userId = req.params.id;
    db.User.destroy({where: {id:userId}})
      .then((destroyed) => {
        res.json(destroyed);
    }).catch((err) => {
      res.send(err);
    });
  },
  update: (req, res) => {
    let userId = req.params.id;
    let newUsername = req.body.username;
    let newPassword = req.body.password;

    db.User.update({username:newUsername, password:newPassword}, {where:{id:userId}})
      .then((updated) => {
        res.send(updated);
    }).catch((err) => {
      res.send(err);
    });
  }

}



module.exports = control;
