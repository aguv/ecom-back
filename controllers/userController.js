const { User } = require("../db/models/User");
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET; 

const userController = {
    register = (req, res, next) => {
        User.create(req.body)
        .then((user) => {
            res.status(201).send(user)
        })
        .catch(next);
    }, 
    login = (req, res, next) => {
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
    },
    logout = (req, res, next) => {
        // const token = req.body
        // ver - ruta para logout (que opcion usamos de jwt)

    },
    updateUser = (req, res, next) => {
        User.findByPk(req.params.id)
        .then(data => data ? data.update(req.body).then(data =>  res.send(data) ) : res.sendStatus(404))
        .catch(next)
    },
    getUser = (req, res, next) => {
        // if token?  o trabajar el middleware en esta ruta de jwt con el user id? 
        User.findByPk(req.params.id)
        .then(data => {
            if(!data) res.sendStatus(404)
        })
        // - ruta que devuelve usuario loggeado en caso de que haya
    },
    deleteUser = (req, res, next) => {
        User.findByPk(req.params.id)
        .then(data => data ? data.destroy().then(() => res.status(200).send('User was deleted')) : res.sendStatus(404))
        .catch(next);    
    },
    updateAdmin = (req, res, next) => {
        User.findByPk(req.body.userID)
        .then(data => data ? data.update(req.body).then(data => res.send(data) ) : res.sendStatus(404))
        .catch(next)
    },
    getUsersAdmin = (req, res, next) => {
        User.findAll({})
        .then(data => res.send(data))
        .catch(next) 
    }    

}


module.exports = userController;
