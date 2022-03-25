const router = require("express").Router();
const CategoryController = require("../controllers/Category.controller");
const AuthController = require("../controllers/Auth.controller");

router.get("/", CategoryController.getAllCategory);

router.use(AuthController.protect, AuthController.restrict);
router.post("/", CategoryController.addCategory);
router.delete("/:id", CategoryController.deleteCategory);
router.patch("/:id", CategoryController.updateCategory);

module.exports = router;
