const router = require("express").Router();
const AdminController = require("../controllers/Admin.controller");
const AuthController = require("../controllers/Auth.controller");

router.use(AuthController.protect, AuthController.restrict);
router.get("/", AdminController.statistics);

module.exports = router;
