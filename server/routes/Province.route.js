const router = require("express").Router();
const ProvinceController = require("../controllers/Province.controller");

router.get("/", ProvinceController.getAllProvince);

module.exports = router;
