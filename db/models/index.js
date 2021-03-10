const User = require("./User");
const Product = require("./Product");
const Cart = require("./Cart");
const Category = require("./Category");
const Favorite = require("./Favorite");
const Product_Category = require("./Product_Category");

// User.belongsToMany(Product, {through:'products'})
// Product.belongsToMany(User, {through:'products'})

// User.hasOne(Cart)
// Cart.belongsToMany(User)

// Cart.belongsToMany(Product)
// Product.belongsToMany(Cart)

Product.belongsToMany(Category, {through: 'productcategories'})
Category.belongsToMany(Product, {through: 'productcategories'})

// User.belongsToMany(Favorite, {through:'favorites'})
// Favorite.belongsToMany(User, {through:'favorites'})

// module.exports = { User, Product, Cart, Category, Favorite, P Favorite, Product_Category };
