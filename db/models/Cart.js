const db = require("../index");
const { Model } = require("sequelize");
const S = require("sequelize");

const User = require("./User");
const Cart_item = require("./Cart_item");

class Cart extends Model {

}

Cart.init(
	{
		status: { // active, confirmed, pending, refused
			type: S.STRING,
			allowNull: false,
		},
		userId: {
			type: S.INTEGER,
			allowNull: false,
		},
	},

  { sequelize: db,
    modelName: "cart", 
   }
);

Cart.hasMany(Cart_item)
Cart.belongsTo(User, {foreignKey: 'userId'})


carrito.addCart_item({})
carrito.getCart_items([{},{}])
module.exports = Cart;

