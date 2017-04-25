var express = require('express');
var router = express.Router();
const helper = require('../helpers/verify.js');

const userController = require('../controllers/userController');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


router.post('/signup', userController.signup)
router.post('/signin', userController.signin)
router.get('/users', helper.isAdmin ,userController.getUsers) // get all the user info (admin only)
router.get('/users/:id', userController.getUser) // admin & authenticated user
router.post('/users', helper.isAdmin ,userController.insertUser) // admin
router.delete('/users/:id', helper.isAdmin ,userController.deleteUser) // admin
router.put('/users/:id', userController.updateUser) // admin & authenticated user

module.exports = router;
