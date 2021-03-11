const router = require('express').Router();
const userController = require("../controllers/userController");
const adminCheck = require("../middleware/adminCheck");
const authJWT = require('../middleware/authJWT');

router.post("/register", userController.register);
router.post("/login", userController.login);

router.put("/update", authJWT, userController.updateUser);

router.get("/", authJWT , userController.getUser);

router.put("/adminup", authJWT, adminCheck, userController.updateAdmin);
router.get("/adminuse", authJWT, adminCheck, userController.getUsersAdmin);
router.delete("/admindel", authJWT, adminCheck, userController.deleteUser); 



module.exports = router