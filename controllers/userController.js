require('dotenv').config();

const User = require("../db/models/User");
const TokenExpired = require("../db/models/TokenExprired") // asumiendo que este la tabla.
// import { createBlackList } from 'jwt-blacklist'; // si usamos black list jwt  // npm install jwt-blacklist
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET; 

const userController = {}

console.log(secret)

userController.register = (req, res, next) => {
    User.create(req.body)
   .then((user) => {
    res.status(201).send(user)
    })
    .catch(next);
} 

userController.login = (req, res, next) => {
    const { email, password } = req.body;
    
    User.findOne({where: {email}})
    .then((user) => {
        if(!user){
            return res.status(401).send("Invalid credentials")
        }
        if(!user.validPassword(password)){  
            return res.status(401).send("Invalid credentials")
        }
        const token = jwt.sign({id: user.id}, secret, {expiresIn: '3h'}) // ver si el front requiere otros datos. 
            
        return res.status(200).send({ token })
    })
}
    
userController.logout = (req, res, next) => {
    const token = req.body
    TokenExpired.add(token)  // blacklist.add(token) // si usamos blacklist
    .then(() => res.status(200).send("Log out ok"))
}
    
userController.updateUser = (req, res, next) => {
    User.findByPk(req.params.id)
    .then(data => data ? data.update(req.body)
        .then(data =>  res.send(data) ) : res.sendStatus(404))
    .catch(next)
    }

userController.getUser = (req, res, next) => {
    User.findByPk(req.params.id)
    .then(data => {
    if(!data) res.sendStatus(404)
    })
}

userController.deleteUser = (req, res, next) => {
    User.findByPk(req.params.id)
    .then(data => data ? data.destroy()
        .then(() => res.status(200).send('User was deleted')) : res.sendStatus(404))
    .catch(next);    
}

userController.updateAdmin = (req, res, next) => {
        User.findByPk(req.body.userID)
        .then(data => data ? data.update(req.body)
            .then(data => res.send(data) ) : res.sendStatus(404))
        .catch(next)
}

userController.getUsersAdmin = (req, res, next) => {
    User.findAll({})
    .then(data => res.send(data))
    .catch(next) 
}    



module.exports = userController;
