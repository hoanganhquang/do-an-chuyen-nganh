const router = require("express").Router();
const AdminController = require("../controllers/Admin.controller");

router.get("/", AdminController.statistics);

module.exports = router;
