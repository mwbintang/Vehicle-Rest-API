const express = require("express");
const router = express.Router();
const routerBrand = require('../routes/brand')

router.use("/brand", routerBrand);

module.exports = router;