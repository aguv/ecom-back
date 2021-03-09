const User = require("./User");
const Product = require("./Product");
const Cart = require("./Cart");
const Category = require("./Category");
const Favorite = require("./Favorite");

User.belongsToMany(Product, {through:'products'})
Product.belongsToMany(User, {through:'products'})

User.hasOne(Cart)
Cart.belongsToMany(User)

Cart.belongsToMany(Product)
Product.belongsToMany(Cart)

Product.belongsToMany(Category, {through:'categories'})
Category.belongsToMany(Product, {through:'categories'})

User.belongsToMany(Favorite, {through:'favorites'})
Favorite.belongsToMany(User, {through:'favorites'})

module.exports = { User, Product, Cart, Category, Favorite };
