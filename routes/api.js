'use strict';

var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController.js');
var util = require('../helpers/util.js')

router.get('/', (req,res,next) => {
  res.send('Hello World');
})

router.get('/users', util.isValidAdmin, userController.getAllUsers);
router.get('/users/:id', util.isValidUserOrAdmin, userController.getOneUser);
router.post('/users', util.isValidAdmin, userController.createUser);
router.put('/users/:id',  userController.updateUser);
router.delete('/users/:id', util.isValidAdmin, userController.deleteUser);
router.post('/signup', userController.signUp);
router.post('/signin', userController.signIn);

module.exports = router;
