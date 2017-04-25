'use strict';
const router = require('express').Router()
const userController = require('../controllers/userController')

// NOTE: routes user
router.post('/api/users', userController.insertOne)
router.get('/api/users', userController.getAll)
router.get('/api/user/:id', userController.getById)
router.put('/api/users/:id', userController.updateById)
router.delete('/api/users/:id', userController.deleteById)

router.post('/api/register', userController.register)
router.post('/api/login', userController.login)

module.exports = router