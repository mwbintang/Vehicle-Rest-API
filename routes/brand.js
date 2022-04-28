const express = require("express");
const router = express.Router();
const Controller = require("../controllers/brand");

router.get("/", Controller.getAllBrand);
router.get("/:id", Controller.getBrandById);
router.post("/", Controller.addBrand);
router.patch("/:id", Controller.editBrand);
router.delete("/:id", Controller.deleteBrand);

module.exports = router;