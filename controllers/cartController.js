const Cart_item = require("../db/models/Cart_item");
const Cart = require("../db/models/Cart");

const cartController = {}

// api/cart 
// Esto considerando que se guarda en localstorage un arrar o estado redux array de productos. Se envia al back al momento de logout/ ir al pago /// cuando un usuario se loguea deberiamos enviarle el carrito. 
cartController.addProduct = (req, res, next) => {
    const userTokenID = req.user.userId
    Cart.findOne({
        where: {userId: userTokenID, status: "active"}
    })  
    .then(cart => {
       const products = req.body.map( producto => {
           
        cart.addCart_items( producto )
       }) 
        // cart.addCart_items()
        // cart.getCart_items({where: {cartId : cart.id}})
        // .then(cart_items => {
            // cart.addCart_items(req.body)})
            // console.log(cart_items, "data del get")})

        // dataValues: {
            // id: 5,
            // status: 'active',
            // userId: 8,
            // createdAt: 20
        // .then(data =>{
            // console.log("data del getcart item ", data)
        // })
        // console.log(req.body)
    }
        
        )
        
    //     data ? data.update(req.body).then(data => res.send(data)) : res.sendStatus(404))
    // .catch(next)
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
