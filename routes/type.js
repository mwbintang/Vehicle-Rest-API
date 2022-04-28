const express = require("express");
const router = express.Router();
const Controller = require("../controllers/type");
const {isLogin, isAdmin} = require('../middleware/auth')

router.get("/", isLogin, Controller.getAllType);
router.get("/:id", isLogin, Controller.getTypeById);
router.post("/", isAdmin, Controller.addType);
router.patch("/:id", isAdmin, Controller.editType);
router.delete("/:id", isAdmin, Controller.deleteType);

module.exports = router;