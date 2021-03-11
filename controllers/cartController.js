
const Cart = require("../db/models/Cart");
const Product = require("../db/models/Product");
const Cart_item = require("../db/models/Cart_item");
const { Op } = require("sequelize");

const cartController = {}

// api/cart 
// Esto considerando que se guarda en localstorage un arrar o estado redux array de productos. Se envia al back al momento de logout/ ir al pago /// cuando un usuario se loguea deberiamos enviarle el carrito. 
cartController.addProduct = (req, res, next) => {
    const userTokenId = req.user.id
    const cartItems = req.body // [{productId: id, quantity: cantidad}, {productId: id, quantity: cantidad}]

    Cart.findOne({
        where: {userId: userTokenId, status: "active"},
        include: Cart_item
    })
    .then((cart) => {
        const promises = cartItems.map(item=>{
            const {productId, quantity} = item
            return Cart_item.findOrCreate({
                where: {productId, cartId: cart.id},
                defaults: {productId, quantity, cartId: cart.id}
            }) // [instancia, created]
            .then(cart_items => cart_items[0].update({quantity, cartId:cart.id}))
        })
        return Promise.all(promises).then(updatedCart=>res.status(200).send(updatedCart))
    })

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
