const Product = require('../db/models/Product');
const helpers = require('../utils/helpers');

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
    Product.findByPk(req.params.id)
        .then(product => product ? product.update(req.body).then(product => res.status(200).send(product)) : res.sendStatus(404))
        .catch(next);
};

controller.deleteProduct = (req, res, next) => {
    Product.findByPk(req.params.id)
        .then(product => product ? product.destroy().then(() => res.status(200).send('Product was deleted')) : res.sendStatus(404))
        .catch(next);
};

controller.createProduct = (req, res, next) => {
    Product.findOne({ where: { name: req.body.name }})
        .then(product => {
            if(product) res.status(200).send('Product already exists');
            else {
                Product.create(req.body)
                .then(product => {
                    helpers.categoryHelper(req.body.categories)
                        .then(categories => categories.map(category => {
                            /* console.log(product)
                            console.log(category) */
                            // product.addCategory(category)
                        }))
                        .then(() => res.status(200).send(product));
                })
            }
        })
        .catch(next);
};

module.exports = controller;