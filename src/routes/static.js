const express = require("express");
const router = express.Router();
const staticController = require("../controllers/static.js");

router.get("/", staticController.home);
router.get("/sign_up", staticController.signUpForm);
router.post("/user", staticController.signUp);

module.exports = router;