'use strict';
const router = require('express').Router()
const userController = require('../controllers/userController')
var jwtHelpers = require('../helpers/check_token')

// NOTE: routes user
router.post('/api/users', jwtHelpers.check_token_admin, userController.insertOne) // admin only
// router.get('/api/users', userController.getAll)
router.get('/api/users', jwtHelpers.check_token_admin, userController.getAll) // admin only
router.get('/api/user/:id', jwtHelpers.check_token_global, userController.getById)
router.put('/api/users/:id', jwtHelpers.check_token_global, userController.updateById)
router.delete('/api/users/:id', jwtHelpers.check_token_admin, userController.deleteById) // admin only

router.post('/api/signup', userController.signup)
router.post('/api/signin', userController.signin)

module.exports = router