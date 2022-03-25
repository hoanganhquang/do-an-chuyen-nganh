const router = require("express").Router();
const Order = require("../controllers/Order.controller");
const AuthController = require("../controllers/Auth.controller");

router.use(AuthController.protect);
router.get("/", AuthController.restrict, Order.getAllOrder);
router.post("/", Order.addOrder);
router.delete("/:id", AuthController.restrict, Order.deleteOrder);
router.patch("/:id", Order.updateOrder);

module.exports = router;
