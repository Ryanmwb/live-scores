const express = require("express");
const router = express.Router();
const scoresController = require("../controllers/scores.js");

router.get("/scores/:sport", scoresController.allScores);
router.get("/whatsLive", scoresController.whatsLive);

router.get("/update_scores/:sport/:team1/:team2", scoresController.updateScores);

module.exports = router;