const User = require("./User");
const Product = require("./Product");
const Cart = require("./Cart");
const Category = require("./Category");
const Product_Category = require("./Product_Category");

User.belongsToMany(Product, {through:'favorites'})
Product.belongsToMany(User, {through:'favorites'})




