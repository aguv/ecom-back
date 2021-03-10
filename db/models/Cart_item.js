const db = require("../config/db");
const { Model } = require("sequelize");
const S = require("sequelize");

const Cart = require("./Cart");
const Product = require("./Product");

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


Cart_item.belongsTo(Product)
Cart_item.belongsTo(Cart, {foreignKey: 'cartId'})
// Cart_item.belongsTo(Cart, {foreignKey: 'cartId'})


module.exports = Cart_Product;