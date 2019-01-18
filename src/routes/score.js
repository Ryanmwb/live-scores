const express = require("express");
const router = express.Router();
const scoresController = require("../controllers/scores.js");

router.get("/scores/:sport", scoresController.allScores);
router.get("/whatsLive", scoresController.whatsLive);

module.exports = router;