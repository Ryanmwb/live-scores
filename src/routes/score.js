const express = require("express");
const router = express.Router();
const scoresController = require("../controllers/scores.js");

router.get("/soccer", scoresController.soccer)
router.get("/football", scoresController.football)
router.get("/whatsLive", scoresController.whatsLive)

module.exports = router;