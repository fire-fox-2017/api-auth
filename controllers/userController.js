const db = require('../models');
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
const auth = require('../helpers/verify.js').auth;
const methods = {};

methods.signup = (req,res,next) => {
    var name = req.body.name;
    var phone = req.body.phone;
    var role = req.body.role;
    var username = req.body.username;
    var password = passwordHash.generate(req.body.password);

    db.User.create({
        name: name,
        phone: phone,
        role: role,
        username: username,
        password: password
    })
    .then(user => {
        res.json(user)
    })
    .catch(err => {
        res.json(err)
    })

}

methods.signin = (req,res,next) => {
    // console.log('a');
    db.User.findOne({
        where: {
            username:req.body.username
        }
    })
    .then(user => {
        if(passwordHash.verify(req.body.password, user.password)){
            let data = user.toJSON();
            delete data.id;
            delete data.phone;
            delete data.password;
            delete data.createdAt;
            delete data.updatedAt;
            // res.json(data);
            // let dataToken = jwt.sign(data, 'secret', {expiresIn: '1h'})
            res.json({
                message: 'Login sukses',
                token: auth(data)
            })
        } else {
            res.json({message: 'Password Tidak sesuai'});
        }
    })
    .catch(err => {
        res.json({message: 'Username Tidak sesuai'});
    })
}

methods.getUsers = (req,res,next) => {

    let token = req.headers.token;

    db.User.findAll()
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.json(err)
    })
}

methods.getUser = (req,res,next) => {
    var UserId = req.params.id;
    db.User.findById(UserId)
    .then(user => {
        res.json(user)
    })
    .catch(err => {
        res.json(err)
    })
}

methods.insertUser = (req,res,next) => {
    var name = req.body.name;
    var phone = req.body.phone;
    var role = req.body.role;
    var username = req.body.username;
    var password = passwordHash.generate(req.body.password);

    db.User.create({
        name: name,
        phone: phone,
        role: role,
        username: username,
        password: password
    })
    .then(user => {
        res.json(user)
    })
    .catch(err => {
        res.json(err)
    })
}

methods.deleteUser = (req,res,next) => {
    var userId = req.params.id;

    db.User.destroy({
        where: {
            id: userId
        }
    })
    .then(user => {
        res.json(user)
    })
    .catch(err => {
        res.json(err)
    })
}

methods.updateUser = (req,res,next) => {
    var userId = req.params.id;
    var name = req.body.name;
    var phone = req.body.phone;
    var role = req.body.role;
    var username = req.body.username;
    var password = passwordHash.generate(req.body.password);

    db.User.update({
        name:name,
        phone:phone,
        role: role,
        username: username,
        password: password
    },{
        where:{
            id:userId
        }
    })
    .then(user => {
        res.json(user)
    })
    .catch(err => {
        res.json(err)
    })
}

module.exports = methods
