const express = require("express");
const router = express.Router();
const Controller = require("../controllers/vehicleModel");
const {isLogin, isAdmin} = require('../middleware/auth')

router.get("/", isLogin, Controller.getAllModel);
router.get("/:id", isLogin, Controller.getModelById);
router.post("/", isAdmin, Controller.addModel);
router.patch("/:id", isAdmin, Controller.editModel);
router.delete("/:id", isAdmin, Controller.deleteModel);

module.exports = router;