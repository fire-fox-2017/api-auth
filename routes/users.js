var express = require('express');
var router = express.Router();
var controllers = require('../controllers/usersControllers');
var jwthelpers = require('../helpers/jwtHelper');

router.get('/users/', jwthelpers.adminonly, controllers.getall); //admin only
router.get('/users/:id', jwthelpers.global, controllers.getone);
router.post('/users/', jwthelpers.adminonly, controllers.create);
router.delete('/users/:id', jwthelpers.adminonly, controllers.delete);
router.put('/users/:id', jwthelpers.global, controllers.update);
router.post('/signup', controllers.signup);
router.post('/signin', controllers.signin);

module.exports = router;
