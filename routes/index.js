const express = require("express");
const router = express.Router();
const routerBrand = require('./brand')
const routerUser = require('./user')

router.use("/brand", routerBrand);
router.use("/", routerUser);

module.exports = router;