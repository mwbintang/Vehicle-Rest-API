const express = require("express");
const router = express.Router();
const Controller = require("../controllers/vehicleYear");
const {isLogin, isAdmin} = require('../middleware/auth')

router.get("/", isLogin, Controller.getAllYear);
router.get("/:id", isLogin, Controller.getYearById);
router.post("/", isAdmin, Controller.addYear);
router.patch("/:id", isAdmin, Controller.editYear);
router.delete("/:id", isAdmin, Controller.deleteYear);

module.exports = router;