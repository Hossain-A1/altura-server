const express = require("express");
const { login, register } = require("../controllers/autn.controller");
const getAllUser = require("../controllers/user.controller");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/users",  getAllUser);

module.exports = router;
