const express = require("express");
const router = express.Router();
const staticController = require("../controllers/static.js");

router.get("/", staticController.home);


module.exports = router;