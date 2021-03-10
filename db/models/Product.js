const db = require("../index");
const { Model } = require("sequelize");
const S = require("sequelize");

class Product extends Model {

}

Product.init(
	{
    name: {
        type: S.STRING,
        allowNull: false,
		},
        description: {
            type: S.STRING,
             allowNull: false,
        },
        weight: {
            type: S.FLOAT,
            allowNull: false,
        },
		brand: {
			type: S.STRING,
			allowNull: false,
		},
        quantity: {
            type: S.INTEGER,
            allowNull: false,
        },
        image_path: {
            type: S.STRING,
            allowNull: false,
        },
        price: {
            type: S.FLOAT,
            allowNull: false,
        },
	},
  { sequelize: db,
    modelName: "product", 
   }
);


module.exports = Product;