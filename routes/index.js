var express = require('express');
var router = express.Router();
var userControl = require('../controllers/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/signup', userControl.signUp);
router.post('/api/signin', userControl.signIn);
router.get('/api/users', userControl.findAll);
router.post('/api/users', userControl.create);
router.get('/api/users/:id', userControl.findById);
router.delete('/api/users/:id', userControl.delete);
router.put('/api/users/:id', userControl.update);

module.exports = router;
