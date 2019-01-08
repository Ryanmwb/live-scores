const express = require("express");
const router = express.Router();
const scoresController = require("../controllers/scores.js");

router.get("/scores", scoresController.display)

module.exports = router;