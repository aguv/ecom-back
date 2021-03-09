const router = require('express').Router();
const register = require('./user');
const login = require('./login');


router.use('/register', register);
router.use('/login', login)

module.exports = router;



// const userController = require('../controllers/userController')
// router.put('/user/:id', userController.updateUser);