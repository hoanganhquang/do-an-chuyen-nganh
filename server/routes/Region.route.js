const router = require("express").Router();
const RegionController = require("../controllers/Region.controller");

router.get("/", RegionController.getAllRegion);

module.exports = router;
