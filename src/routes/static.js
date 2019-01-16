const express = require("express");
const router = express.Router();
const staticController = require("../controllers/static.js");
const validation = require('./validation');

router.get("/", staticController.home);
router.get("/sign_up", staticController.signUpForm);
router.post("/user", validation.validateUsers, staticController.signUp);
router.get("/sign_in", staticController.signInForm);
router.post("/signIn", validation.validateUsers, staticController.signIn);
router.get("/signOut", staticController.signOut);

module.exports = router;