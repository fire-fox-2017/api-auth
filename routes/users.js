var express = require('express');
var router = express.Router();
var models = require('../models');
var controller = require('../controllers/usersController');

/* GET users listing. */
router.post('/api/signup', controller.insert);
router.post('/api/signin', controller.login);
router.get('/api/users', controller.getAllData);
router.get('/api/users/:id', controller.getDataById);
router.delete('/api/users/:id', controller.delete);
router.put('/api/users/:id',controller.updates);
router.patch('/api/users/:id',controller.updates);

module.exports = router;
