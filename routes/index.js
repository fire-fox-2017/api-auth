'use strict';
const router = require('express').Router()
const userController = require('../controllers/userController')
var jwtHelpers = require('../helpers/check_token')

// NOTE: routes user
router.post('/api/users', jwtHelpers.check_token, userController.insertOne) // admin only
// router.get('/api/users', userController.getAll)
router.get('/api/users', jwtHelpers.check_token, userController.getAll) // admin only
router.get('/api/user/:id', userController.getById)
router.put('/api/users/:id', userController.updateById)
router.delete('/api/users/:id', jwtHelpers.check_token, userController.deleteById) // admin only

router.post('/api/signup', userController.signup)
router.post('/api/signin', userController.signin)

module.exports = router