const Cart_item = require("../db/models/Cart_item");
const Cart = require("../db/models/Cart");

const cartController = {}

// api/cart 
// Esto considerando que se guarda en localstorage un arrar o estado redux array de productos. Se envia al back al momento de logout/ ir al pago /// cuando un usuario se loguea deberiamos enviarle el carrito. 
cartController.addProduct = (req, res, next) => {

}

cartController.deleteProduct = (req, res, next) => {
    Cart.findByPk(req.params.id)  
    .then(data => data.findOne(productId))
    .then(data => data ? data.destroy().then(() => res.status(200).send('Product was deleted')) : res.sendStatus(404))
    .catch(next)
}


cartController.modifyQuantityProduct = (req, res, next) => {
    Cart.findByPk(req.params.id)  
    .then(data => data.findOne(productId))
    .then(data => data ? data.quantity.update(req.body).then(data => res.send(data)) : res.sendStatus(404) )
    .catch(next)
}

module.exports = cartController;

// router.put("/:id", cartController.addProduct);
// router.delete(":id", cartController.deleteProduct)
// router.put("/:id/product", cartController.modifyQuantityProduct)
