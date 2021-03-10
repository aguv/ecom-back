const Cart = require("../db/models/Cart");

const cartController = {}

cartController.addProduct = (req, res, next) => {
    Cart.findByPk(req.params.id)  
    .then(data => data ? data.update(req.body).then(data => res.send(data)) : res.sendStatus(404))
    .catch(next)
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
