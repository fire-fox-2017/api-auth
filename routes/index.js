'use strict';
const router = require('express').Router()
const userController = require('../controllers/userController')
var jwtHelpers = require('../helpers/check_token')

// NOTE: routes user
router.post('/api/users', userController.insertOne)
// router.get('/api/users', userController.getAll)
router.get('/api/users', jwtHelpers.check_token, userController.getAll)
router.get('/api/user/:id', userController.getById)
router.put('/api/users/:id', jwtHelpers.check_token, userController.updateById)
router.delete('/api/users/:id', jwtHelpers.check_token, userController.deleteById)

router.post('/api/signup', userController.signup)
router.post('/api/signin', userController.signin)

module.exports = router