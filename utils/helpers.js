const User = require('../db/models/User');
const Category = require('../db/models/Category');

const helpers = {}

helpers.categoryHelper = (categories, user) => {
    categoriesPromises = categories.map(category => Category.findOrCreate( { where: { name: category }}))

    return Promise.all(categoriesPromises);
};

module.exports = helpers;

