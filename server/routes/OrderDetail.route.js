const router = require("express").Router();
const OrderDetail = require("../controllers/OrderDetail.controller");
const AuthController = require("../controllers/Auth.controller");

router.use(AuthController.protect);
router.get("/", OrderDetail.getAllOrderDetail);
// router.post("/", OrderDetail.addOrderDetail);
// router.delete("/:id", OrderDetail.deleteOrderDetail);
router.patch("/:id", OrderDetail.updateOrderDetail);

module.exports = router;
