const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const auth = require('../helpers/auth');

router.post('/signup', userController.signUp);
router.post('/signin', userController.signIn);
router.get('/', auth.adminAuth, userController.getAll);

module.exports = router;