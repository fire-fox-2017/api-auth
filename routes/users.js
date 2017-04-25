var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/userController');
var jwt_helper = require('../helpers/jwt');



//   Get all the users
router.get('/users', jwt_helper.verify_admin, user_controller.index);

// Get a single user_controller
router.get('/users/:id', jwt_helper.verify_normal, user_controller.user_detail);

// Create a user
router.post('/users', jwt_helper.verify_admin, user_controller.user_signup);

// Delete a user
router.delete('/users/:id', jwt_helper.verify_admin, user_controller.user_delete)

// Update user
router.put('/users/:id', jwt_helper.verify_normal, user_controller.user_update_post)



router.post('/signup', user_controller.user_signup );
router.post('/signin', user_controller.user_signin );



module.exports = router;
