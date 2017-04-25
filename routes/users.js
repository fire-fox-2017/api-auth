var express = require('express');
var router = express.Router();
var models = require('../models');
var controller = require('../controllers/usersController');
const jwtHelper = require('../helper/jwthelper');

/* GET users listing. */
router.post('/api/signup', controller.signup);
router.post('/api/signin', controller.signin);
router.get('/api/users',jwtHelper.check_token, controller.getAllData);
router.post('/api/users',jwtHelper.check_token, controller.insert);

router.get('/api/users/:id', jwtHelper.check_token_global,controller.getDataById);
router.delete('/api/users/:id',jwtHelper.check_token, controller.delete);
router.put('/api/users/:id',jwtHelper.check_token_global, controller.updates);

module.exports = router;
