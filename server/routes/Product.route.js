const router = require("express").Router();
const Product = require("../controllers/Product.controller");

router.get("/", Product.getAllProduct);
router.post("/", Product.addProduct);
router.delete("/:id", Product.deleteProduct);
router.patch("/:id", Product.updateProduct);

module.exports = router;
