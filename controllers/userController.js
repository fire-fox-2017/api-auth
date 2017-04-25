var model = require('../models')
var passwordHash = require('password-hash')
var jwt = require('jsonwebtoken')
var methods = {}

methods.insertOne = (req, res, next) => {
    let pwdHash = req.body.password
    model.User.create({
            username: req.body.username,
            password: passwordHash.generate(pwdHash),
            role: req.body.role
        })
        .then(record => {
            res.json(record)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu createOne'
            })
        })
} // insertOne

methods.getAll = (req, res, next) => {
    model.User.findAll()
        .then(records => {
            res.json(records)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu getAll'
            })
        })
} // getAll

methods.getById = (req, res, next) => {
    model.User.findById(req.params.id)
        .then(record => {
            res.json(record)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu getById'
            })
        })
} // getById

methods.updateById = (req, res, next) => {
    let pwdHash = req.body.password
    model.User.update({
            username: req.body.username,
            password: passwordHash.generate(pwdHash),
            role: req.body.role
        }, {
            where: {
                id: req.params.id
            }
        })
        .then((record) => {
            res.json(record)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu updateById'
            })
        })
} //updateById

methods.deleteById = (req, res, next) => {
    model.User.destroy({
            where: {
                id: req.params.id
            }
        })
        .then((record) => {
            res.json(record)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu deleteById'
            })
        })
} //deleteById

methods.signup = (req, res, next) => {
    let pwdHash = req.body.password
    // console.log(pwdHash);
    model.User.create({
            username: req.body.username,
            password: passwordHash.generate(pwdHash),
            role: req.body.role
        })
        .then(record => {
            res.json(record)
        })
        .catch(error => {
            res.json({
                error
            })
        })
} // signup

methods.signin = (req, res, next) => {
    model.User.findOne({
            where: {
                username: req.body.username
            }
        })
        .then(record => {
            // console.log(typeof record.password);
            let pwdHash = req.body.password
            if (passwordHash.verify(pwdHash, record.password)) {
                // secret itu kata khusus utk mengunci tokennya

                // recordtojson : mengassign data user menjadi object yg baru
                let data = Object.assign({}, record.toJSON())
                console.log(data);
                // utk delete passwordnya
                delete data.password

                let token = jwt.sign(data, 'secret', {
                    expiresIn: '1h'
                })
                res.json({
                    message: 'Login is Successful',
                    token,
                    username: data.username,
                    role: data.role
                })
            } else {
                res.json({
                    message: 'Your password is not match'
                })
            }
        })
        .catch(error => {
            res.json({
                error
            })
        })
} //signin

module.exports = methods