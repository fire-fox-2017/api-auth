let router = require('express').Router();
let userController = require('../controllers/users')
let authController = require('../controllers/auth')
let helper = require('../helpers/verify_token')

router.get('/', function(req, res, next) {
  res.send('Hello World');
})
// routes user
router.get('/users', helper.isAdmin, userController.getAllUsers)
router.get('/users/:id', helper.auth, userController.getById)
router.post('/users', helper.isAdmin, userController.createUser)
router.put('/users/:id', helper.auth, userController.updateById)
router.delete('/users/:id', helper.isAdmin, userController.deleteById)
router.post('/signup', authController.signup)
router.post('/signin', authController.signin)

module.exports = router;
