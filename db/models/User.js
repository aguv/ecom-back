const db = require("../index");
const { Model } = require("sequelize");
const S = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')


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
	generateToken = function () {
        return jwt.sign(
            {
                userId: this.id,
                email: this.get('email'),
                roles: this.roles.map(role => role.name)
            },
            process.env.SECRET || 'arwines',
            {expiresIn: 360000}
        );
    };
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
		admin: {
			type: S.BOOLEAN,
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

// User.belongsToMany(Role,{through: 'user_roles', foreignKey: 'userId', otherKey: 'roleId'})




module.exports = User;