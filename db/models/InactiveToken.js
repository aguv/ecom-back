const db = require("../config/db");
const { Model } = require("sequelize");
const S = require("sequelize");
const { Op } = require("sequelize")
class InactiveToken extends Model {
    isExpired() {
        const now = Date.now()
        return (this.expiration - now <= 0) && true
    }
}

InactiveToken.init(
	{
	token: { // active, confirmed, pending, refused
        type: S.STRING,
        allowNull: false,
        unique:true,
    },
    expiration: {
        type: S.INTEGER,
        allowNull: true,
    }
	},
  { sequelize: db,
    modelName: "inactivetoken", 
   }
);

InactiveToken.beforeCreate(() => {
    // InactiveToken.findAll({where: {expiration: {[Op.lt]: Date.now()}}})
    // .then(token=>token.destroy())
    this.expiration = this.token.de
    InactiveToken.destroy({where: {expiration: {[Op.lt]: Date.now()}}})
		
});

module.exports = InactiveToken;