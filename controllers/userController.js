
require('dotenv').config();
const helpers = require('../utils/helpers')
// const models = require('../db/models/')
const User = require("../db/models/User");
const Cart = require("../db/models/Cart");

const userController = {}

userController.register = (req, res, next) => {
    User.create(req.body)
   .then((user) => {
        user.getCarts({where: {status : "active"}})
       .then(cart => {
            const token = user.generateToken()
            res.status(201).send({
            ...user.dataValues , cart: cart[0], token    
            })   
        })    
    })
    .catch(next);
} 
userController.login =  (req, res, next) => {
    const { email, password } = req.body;
    console.log(models, 'models')
    User.findOne({where: {email}})
    .then((user) => {
        if(!user){
            return res.status(401).send("Invalid credentials")
        }
        if(!user.validPassword(password)){  
            return res.status(401).send("Invalid credentials")
        }        const token = jwt.sign({id: user.id}, secret, {expiresIn: '3h'}) 
        // ver si el front requiere otros datos.
        helpers.getCart_items(user.id).then(cart=>{
            return res.status(200).send({ token, cart })
        })

    })
}
userController.updateUser = (req, res, next) => {
    const userIdfromToken = req.user.userId
    User.findByPk(userIdfromToken)
    .then(userData => userData ? userData.update(req.body)
        .then(newUserData =>  res.send(newUserData) ) : res.sendStatus(404))
    .catch(next)
    }
userController.getUser = (req, res, next) => {
    const userIdfromToken = req.user.userId
    User.findByPk(userIdfromToken)
    .then(getUser => {
    getUser ? res.status(200).send(getUser) : res.sendStatus(404)
    })
    .catch(next)
}
userController.deleteUser = (req, res, next) => {
    User.findByPk(req.body.userId)
    .then(userData => { // userData.id --> para buscar el cart relacionado
        Cart.findAll({where: {userId: userData.id}})
        .then(cart =>{
            cart.map((everyCart) => {
                return everyCart.destroy()
                .then((carDelete) => carDelete)
            })
        })
        .then(() => {
            userData.destroy()
            .then(() => 
            res.status(200).send("User and related data was deleted"))
        })
    })
    .catch(next);    
}
userController.updateAdmin = (req, res, next) => {
    User.findByPk(req.body.userId)
    .then(userData => userData ? userData.update(req.body)
        .then(newUserData => res.send(newUserData) ) : res.sendStatus(404))
    .catch(next)
}
userController.getUsersAdmin = (req, res, next) => {
    User.findAll({})
    .then(allUsers => res.status(200).send(allUsers))
    .catch(next) 
}    
module.exports = userController;