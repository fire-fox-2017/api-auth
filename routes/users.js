const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const auth = require('../helpers/auth');

router.post('/signup', userController.signUp);
router.post('/signin', userController.signIn);
router.get('/', auth.adminAuth, userController.getAll);
router.get('/:id', auth.allAuth, userController.findId);
router.post('/', auth.adminAuth, userController.create);
router.delete('/:id', auth.adminAuth, userController.delete);
router.put('/:id', auth.allAuth, userController.update);

module.exports = router;