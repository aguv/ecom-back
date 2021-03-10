const { Cart } = require("../db/models");

const cartController = {
    addProduct = (req, res, next) => {
        Cart.findByPk(req.params.id)  
        .then(data => data ? data.update(req.body).then(data => res.send(data)) : res.sendStatus(404))
        .catch(next)
    }, 
    deleteProduct = (req, res, next) => {
        Cart.findByPk(req.params.id)  
        .then(data => data.findOne(productId))
        .then(data => data ? data.destroy().then(() => res.status(200).send('Product was deleted')) : res.sendStatus(404))
        .catch(next)
    },
    modifyQuantityProduct = (req, res, next) => {
        Cart.findByPk(req.params.id)  
        .then(data => data.findOne(productId))
        .then(data => data ? data.quantity.update(req.body).then(data => res.send(data)) : res.sendStatus(404) )
        .catch(next)
    }
    // Cart model : productId /  quantity / price / total 
}

module.exports = cartController;
