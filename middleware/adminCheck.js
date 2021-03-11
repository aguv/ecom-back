const  User  = require("../db/models/User");

const checkAdmin = (req, res, next) => {   
    req.user.admin ? next() : res.sendStatus(401)
}


module.exports = checkAdmin;