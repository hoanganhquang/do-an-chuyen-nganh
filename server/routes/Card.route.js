const router = require("express").Router();
const Cart = require("../controllers/Cart.controller");
const AuthController = require("../controllers/Auth.controller");

router.use(AuthController.protect);
router.get("/", Cart.getOne);
// router.post("/", Cart.addCard);
// router.delete("/:id", Cart.deleteCard);
router.patch("/:id", Cart.updateCard);

module.exports = router;
