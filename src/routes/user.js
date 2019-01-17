const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.js");
const validation = require('./validation');

router.get("/sign_up", usersController.signUpForm);
router.post("/user", validation.validateUsers, usersController.signUp);
router.get("/sign_in", usersController.signInForm);
router.post("/signIn", validation.validateUsers, usersController.signIn);
router.get("/signOut", usersController.signOut);

module.exports = router;