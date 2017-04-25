var express = require('express');
var router = express.Router();
const controllers = require('../controllers/users');


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', controllers.findall);
router.get('/:id', controllers.find);
router.post('/', controllers.create);
router.delete('/:id', controllers.delete);
router.put('/:id', controllers.update);

module.exports = router;
