// const userController = require('../controllers/userController')
const router = require('express').Router();
const productRoute = require('./productRoute');

// router.put('/user/:id', userController.updateUser);
router.use('/product', productRoute);

module.exports = router;