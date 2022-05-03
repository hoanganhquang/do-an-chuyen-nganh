const router = require("express").Router();
const Product = require("../controllers/Product.controller");
const AuthController = require("../controllers/Auth.controller");

router.get("/", Product.getAllProduct);
router.get("/:province", Product.getOne);

router.use(AuthController.protect, AuthController.restrict);
router.post("/", Product.addProduct);
router.delete("/:id", Product.deleteProduct);
router.patch("/:id", Product.updateProduct);

module.exports = router;
