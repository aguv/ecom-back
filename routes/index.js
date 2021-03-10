const router = require('express').Router();
const productRoute = require('./productRoute');
const userRoute = require('./userRoute');
const cartRoute = require('./cartRoute')

router.use('/product', productRoute);
router.use('/user', userRoute);
router.use('/cart', cartRoute);

module.exports = router;