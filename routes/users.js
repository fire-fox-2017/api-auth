const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')
const jwtHelpers = require('../helpers/jwt')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/signup', userController.signup );
router.post('/signin', userController.signin );
// router.get('/jwtTest', userController.jwtTest );

router.get('/users', jwtHelpers.isAdmin, userController.getAll );
router.get('/users/:id', jwtHelpers.isLogin, userController.getById );
router.post('/users/', jwtHelpers.isAdmin, userController.createUser );
router.delete('/users/:id', jwtHelpers.isAdmin, userController.deleteById );
router.put('/users/:id', jwtHelpers.isLogin, userController.updateById );

module.exports = router;
