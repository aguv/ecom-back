const Category = require('../db/models/Category');

const helpers = {}

helpers.categoryHelper = (categories) => {
    const categoriesPromises = categories.map(category => Category.findOrCreate( { where: { name: category }}))

    return Promise.all(categoriesPromises).then(categories => categories.flat().filter(c => typeof c !== 'boolean'));
};

module.exports = helpers;

