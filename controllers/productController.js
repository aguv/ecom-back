const Product = require('../db/models/Product');

const controller = {};

controller.getProducts = (req, res, next) => {
    Product.findAll()
        .then(products => res.status(200).send(products))
        .catch(next);
};

controller.getProductById = (req, res, next) => {
    Product.findByPk(req.params.id)
        .then(product => product ? res.status(200).send(product) : res.sendStatus(404))
        .catch(next);
};

controller.updateProduct = (req, res, next) => {
    Product.findByPk(rq.params.id)
        .then(product => product ? product.update(req.body) : res.sendStatus(404))
        .catch(next);
};

controller.deleteProduct = (req, res, next) => {
    Product.findByPk(req.params.id)
        .then(product => product ? product.destroy() : res.sendStatus(404))
        .then(() => res.status(200).send('Product was deleted'))
        .catch(next);
};

controller.createProduct = (req, res, next) => {
   Product.findOne({ where: { name: req.body.name } })
    .then(product => product ? res.send('Product already exists') : Product.create(req.body))
    .then(product => res.status(201).send(product))
    .catch(next); 
};

module.exports = controller;