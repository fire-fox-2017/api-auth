var express = require('express');
var router = express.Router();
var controllers = require('../controllers/usersControllers');

router.get('/', controllers.getall);
router.get('/:id', controllers.getone);
router.post('/', controllers.create);
router.delete('/:id', controllers.delete);
router.put('/:id', controllers.update);
router.post('/signup', controllers.signup);

module.exports = router;
