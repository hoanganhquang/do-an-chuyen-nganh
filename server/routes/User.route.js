const router = require("express").Router();
const UserController = require("../controllers/User.controller");
const AuthController = require("../controllers/Auth.controller");

router.use(AuthController.protect);
router.post("/", UserController.updateUser);
router.get("/statistics", UserController.statistics);

module.exports = router;
