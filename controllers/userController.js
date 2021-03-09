const { User } = require("../db/index"); // ver el nombre de la tabla de la db y la ruta de donde importar
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
            if(!user.validPassword(password)){ /// ver la funcion de la db, el nombre. 
                return res.status(401).send("Invalid credentials")
            }
            const token = jwt.sign({id: user.id}, secret) // ver si el fron requiere otros datos. 
            
            return res.status(200).send({ token })
        })
    }
    
}


module.exports = userController;
