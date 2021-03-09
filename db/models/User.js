const db = require("../config/db");
const { Model } = require("sequelize");
const S = require("sequelize");
const bcrypt = require("bcrypt");

class User extends Model {
	removeFavorite(movie) {
		return this.removeFavorite(movie)
	}
	hasFavorite(movie) {
		return this.hasFavorite(movie)
	}
	validPassword (loginPassword) {
		const salt = this.salt // 'askljdhlkiadufvolij123897asclkjhnawm'
		return this.password === bcrypt.hashSync(loginPassword, salt)
	}
}

User.init(
	{
		firstName: {
			type: S.STRING,
			allowNull: false,
		},
		lastName: {
			type: S.STRING,
			allowNull: false,
		},
		email: {
			type: S.STRING,
			 allowNull: false,
			 unique:true,
        },
        address: {
            type: S.STRING,
            allowNull: true,
        },
		password: {
			type: S.STRING,
			allowNull: false,
		},
		salt: {
			type: S.STRING, //askljdhlkiadufvolij123897asclkjhnawm,123
			allowNull: false,
		},

	},
  { sequelize: db,
    modelName: "user", 
   }
);
User.beforeCreate((user) => {
	return bcrypt
		.genSalt(16)
		.then((salt) => {
			user.salt = salt;
			return bcrypt.hashSync(user.password, salt);
		})
		.then((hash) => {
			user.password = hash;
		});
});


module.exports = User;