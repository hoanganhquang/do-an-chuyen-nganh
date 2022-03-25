const router = require("express").Router();
const Order = require("../controllers/Order.controller");
const AuthController = require("../controllers/Auth.controller");

router.use(AuthController.protect);
router.post("/", Order.addOrder);

router.use(AuthController.restrict);
router.get("/", Order.getAllOrder);
router.patch("/:id", Order.updateOrder);
router.delete("/:id", Order.deleteOrder);

module.exports = router;
