const express = require("express");
const { createProduct, getAllProduct, getAProduct } = require("../controllers/product.controller");
const { isAuthorized, isAdmin } = require("../middleware/auth.middleware");
const router = express.Router();
// get all product
router.get('/',getAllProduct)
// get a product
router.get('/:sid',getAProduct)
// create a product
router.post('/', isAuthorized,isAdmin,createProduct)

module.exports = router;
