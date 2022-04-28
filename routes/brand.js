const express = require("express");
const router = express.Router();
const Controller = require("../controllers/brand");
const {isLogin, isAdmin} = require('../middleware/auth')

router.get("/", isLogin, Controller.getAllBrand);
router.get("/:id", isLogin, Controller.getBrandById);
router.post("/", isAdmin, Controller.addBrand);
router.patch("/:id", isAdmin, Controller.editBrand);
router.delete("/:id", isAdmin, Controller.deleteBrand);

module.exports = router;