const router = require("express").Router();
const AuthController = require("../controllers/Auth.controller");

router.post("/signin", AuthController.signIn);
router.post("/signup", AuthController.signUp);

module.exports = router;
