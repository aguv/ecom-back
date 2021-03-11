
const Category = require('../models/Category')
const Product = require('../models/Product')
const User = require('../models/User')
const users = require("./users");
const products = require("./products");
const categories = require("./categories");



let bulkUsers = () => User.bulkCreate(users)
    .then(res => res);

let bulkProducts = () => Product.bulkCreate(users)
    .then(res => res);

let bulkCategories = () => Category.bulkCreate(users)
    .then(res => res);



Promise.all([bulkUsers(),bulkProducts()]).then(x=>{
  console.log(x)
  return x
})