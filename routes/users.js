var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const util = require('../helpers/util');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/users/',util.isValidAdmin ,userController.getAllUser)
router.get('/users/:id',util.isValidUserOrAdmin,userController.getOneUser)
router.post('/users/',util.isValidAdmin,userController.createUser)
router.delete('/users/:id',util.isValidAdmin,userController.deleteUser)
router.put('/users/:id',util.isValidUserOrAdmin,userController.updateUser)
router.post('/signup',userController.signUp)
router.post('/signin',userController.signIn)



module.exports = router;
