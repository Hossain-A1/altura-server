const express = require("express");
const { createProduct } = require("../controllers/product.controller");
const { isAuthorized, isAdmin } = require("../middleware/auth.middleware");
const router = express.Router();

// create a product
router.post('/product', isAuthorized,isAdmin,createProduct)

module.exports = router;
