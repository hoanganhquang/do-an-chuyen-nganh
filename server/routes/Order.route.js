const router = require("express").Router();
const Order = require("../controllers/Order.controller");

router.get("/", Order.getAllOrder);
router.post("/", Order.addOrder);
router.delete("/:id", Order.deleteOrder);
router.patch("/:id", Order.updateOrder);

module.exports = router;
