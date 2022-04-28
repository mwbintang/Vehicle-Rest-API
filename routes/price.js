const express = require("express");
const router = express.Router();
const Controller = require("../controllers/priceList");
const {isLogin, isAdmin} = require('../middleware/auth')

router.get("/", isLogin, Controller.getAllPrice);
router.get("/:id", isLogin, Controller.getPriceById);
router.post("/", isAdmin, Controller.addPrice);
router.patch("/:id", isAdmin, Controller.editPrice);
router.delete("/:id", isAdmin, Controller.deletePrice);

module.exports = router;