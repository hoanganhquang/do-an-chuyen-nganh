const router = require("express").Router();
const CategoryController = require("../controllers/Category.controller");

router.get("/", CategoryController.getAllCategory);
router.post("/", CategoryController.addCategory);
router.delete("/:id", CategoryController.deleteCategory);
router.patch("/:id", CategoryController.updateCategory);

module.exports = router;
