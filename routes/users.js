var express = require('express');
var router = express.Router();
var controllers = require('../controllers/usersControllers');
var jwthelpers = require('../helpers/jwtHelper');

router.get('/users/', jwthelpers.adminonly, controllers.getall); //admin only
router.get('/users/:id', controllers.getone);
router.post('/users/', controllers.create);
router.delete('/users/:id', controllers.delete);
router.put('/users/:id', controllers.update);
router.post('/signup', controllers.signup);
router.post('/signin', controllers.signin);

module.exports = router;
