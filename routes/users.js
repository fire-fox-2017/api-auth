var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/users/',userController.getAllUser)
router.get('/users/:id',userController.getOneUser)
router.post('/users/',userController.createUser)
router.delete('/users/:id',userController.deleteUser)
router.put('/users/:id',userController.updateUser)
router.post('/signup',userController.signUp)
router.post('/signin',userController.signIn)



module.exports = router;
