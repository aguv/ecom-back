const db = require("../index");
const { Model } = require("sequelize");
const S = require("sequelize");

const Product = require("./Product");

class Category extends Model {
}

Category.init(
	{
		name: {
			type: S.STRING,
			allowNull: false,
		},
        description: {
            type: S.STRING,
             allowNull: true,
        },
	},
  { sequelize: db,
    modelName: "category", 
   }
);
Product.belongsToMany(Category, {through: 'prod_cats'})
Category.belongsToMany(Product, {through: 'prod_cats'})


module.exports = Category;