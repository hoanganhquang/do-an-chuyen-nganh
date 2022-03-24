const router = require("express").Router();
const OrderDetail = require("../controllers/OrderDetail.controller");

router.get("/", OrderDetail.getAllOrderDetail);
router.post("/", OrderDetail.addOrderDetail);
router.delete("/:id", OrderDetail.deleteOrderDetail);
router.patch("/:id", OrderDetail.updateOrderDetail);

module.exports = router;
