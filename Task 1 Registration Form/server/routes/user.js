const express = require("express");
const router = express.Router();

// import controller
const { register } = require("../controller/Auth");

router.post("/register", register);

module.exports = router;
