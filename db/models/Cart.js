const db = require("../config/db");
const { Model } = require("sequelize");
const S = require("sequelize");

class Cart extends Model {

}

Cart.init(
	{
		status: { // active, confirmed, pending, refused
			type: S.STRING,
			allowNull: false,
		},
	},
  { sequelize: db,
    modelName: "cart", 
   }
);


module.exports = Cart;