const router = require("express").Router();
const Cart = require("../controllers/Cart.controller");

router.get("/", Cart.getAllCard);
router.post("/", Cart.addCard);
router.delete("/:id", Cart.deleteCard);
router.patch("/:id", Cart.updateCard);

module.exports = router;
