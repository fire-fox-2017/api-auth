var express = require('express');
var router = express.Router();
var jwtHelper = require('../helpers/jwt_helpers');
var jwt = require('jsonwebtoken');
var api = require('../controllers/userController')

/* GET users listing. */
router.post('/signup', api.signUp)
router.post('/signin', api.signIn)
router.get('/users', jwtHelper.authenticateAdmin, api.getAllUser)
router.get('/users/:id', jwtHelper.authenticateUser, api.getUser)
router.post('/users',jwtHelper.authenticateAdmin, api.createUser)
router.delete('/users/:id',jwtHelper.authenticateAdmin, api.deleteUser)
router.put('/users/:id',jwtHelper.authenticateUpdate, api.updateUser)

module.exports = router;
