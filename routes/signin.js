var express = require('express');
var router = express.Router();
const controllers = require('../controllers/users');

router.post('/', controllers.signin)



module.exports = router;
