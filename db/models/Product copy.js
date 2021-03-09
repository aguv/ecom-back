const db = require("../config/db");
const { Model } = require("sequelize");
const S = require("sequelize");

class Cart extends Model {

}

Cart.init(
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
            type: S.STRING,
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
            type: S.INTEGER,
            allowNull,
        },
	},
  { sequelize: db,
    modelName: "cart", 
   }
);


module.exports = Cart;