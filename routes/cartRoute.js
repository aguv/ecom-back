const router = require('express').Router();
const cartController = require("../controllers/cartController");
const authJWT = require('../middleware/authJWT');

router.put("/", authJWT, cartController.addProduct);
router.delete(":id", authJWT, cartController.deleteProduct)
router.put("/:id/:productID", authJWT, cartController.modifyQuantityProduct)



module.exports = router