var express = require('express');
var router = express.Router();
var userControl = require('../controllers/user');
var jwtHelper = require('../helpers/helper');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/signup', userControl.signUp);
router.post('/api/signin', userControl.signIn);
router.get('/api/users', jwtHelper.verifyAdmin, userControl.findAll);
router.post('/api/users', jwtHelper.verifyUser, userControl.create);
router.get('/api/users/:id', jwtHelper.verifyUser, userControl.findById);
router.delete('/api/users/:id', jwtHelper.verifyAdmin, userControl.delete);
router.put('/api/users/:id', jwtHelper.verifyUser, userControl.update);

module.exports = router;
