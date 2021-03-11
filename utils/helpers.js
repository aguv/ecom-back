const Category = require('../db/models/Category');
const Cart_item = require('../db/models/Cart_item');
const Cart = require('../db/models/Cart');

const helpers = {}

helpers.categoryHelper = (categories) => {
    const categoriesPromises = categories.map(category => Category.findOrCreate( { where: { name: category }}))

    return Promise.all(categoriesPromises).then(categories => categories.flat().filter(c => typeof c !== 'boolean'));
}

helpers.getCart_items = (userId) => {
    let arr = [Cart.findOne({
        where: {userId, status: "active"},
        include: Cart_item
    })]
    return Promise.all(arr).then(x=>x)
} 

module.exports = helpers;

