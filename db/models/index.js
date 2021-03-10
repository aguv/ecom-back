const User = require("./User");
const Product = require("./Product");
const Cart = require("./Cart");
const Category = require("./Category");
// const Favorite = require("./Favorite");

/* User.belongsToMany(Product, {through:'prod_user'})
Product.belongsToMany(User, {through:'prod_user'})

User.hasOne(Cart)
Cart.belongsToMany(User)

Cart.belongsToMany(Product)
Product.belongsToMany(Cart)


User.belongsToMany(Favorite, {through:'user_favs'})
Favorite.belongsToMany(User, {through:'user_favs'}) */

