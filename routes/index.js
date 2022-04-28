const express = require("express");
const router = express.Router();
const routerBrand = require('./brand')
const routerUser = require('./user')
const routerType = require('./type')
const routerModel = require('./model')
const routerYear = require('./year')
const routerPrice = require('./price')

router.use("/", routerUser);
router.use("/brand", routerBrand);
router.use("/type", routerType);
router.use("/model", routerModel);
router.use("/year", routerYear);
router.use("/price", routerPrice);

module.exports = router;