const express = require("express");
const router = express.Router();
const staticController = require("../controllers/static.js");
const validation = require('./validation');

router.get("/", staticController.home);
router.get("/sign_up", staticController.signUpForm);
router.post("/user", validation.validateUsers, staticController.signUp);

module.exports = router;