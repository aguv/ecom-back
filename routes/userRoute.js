const router = require('express').Router();
const userController = require("../controllers/userController");
const adminCheck = require("../middleware/adminCheck")

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/logout", userController.logout);

router.put("/:id/update", userController.updateUser);
router.put("/:id/update", adminCheck, userController.updateAdmin);

router.get("/:id", userController.getUser);
router.get("/:id/users", adminCheck, userController.getUsersAdmin);

router.delete("/:id/delete", adminCheck, userController.deleteUser); 


module.exports = router