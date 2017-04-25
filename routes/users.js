var express = require('express');
var api = require('../controllers/userController')
var jwt = require('../helper/jwt_validation')
var router = express.Router();

router.post('/signup', api.signUp) //
router.post('/signin', api.signIn) //
router.get('/users', jwt.verifyAdmin, api.getAllUser) //
router.get('/users/:id', jwt.verifyLogin, api.getSingleUser) //
router.post('/users', jwt.verifyAdmin, api.createUser) //
router.delete('/users/:id', jwt.verifyAdmin, api.deleteUser) //
router.put('/users/:id', jwt.verifyLogin, api.updateUser)

module.exports = router