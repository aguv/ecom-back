const router = require('express').Router();
const cartController = require("../controllers/cartController");


router.put("/:id", cartController.addProduct);
router.delete(":id", cartController.deleteProduct)
router.put("/:id/product", cartController.modifyQuantityProduct)


module.exports = router