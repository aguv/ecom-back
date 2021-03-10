const db = require("../index");
const { Model } = require("sequelize");
const S = require("sequelize");


class Cart_item extends Model {

}

Cart_item.init(
	{
		// cartId: {
		// 	type: S.INTEGER,
		// 	allowNull: false,
		// },
		productId: {
			type: S.INTEGER,
			allowNull: false,
		},
		quantity: {
			type: S.INTEGER,
			allowNull: false,
		},
	},

  { sequelize: db,
    modelName: "cart_item",
   }
);





module.exports = Cart_item;