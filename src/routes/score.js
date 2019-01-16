const express = require("express");
const router = express.Router();
const scoresController = require("../controllers/scores.js");

router.get("/scores/:sport", scoresController.scores);
/*router.get("/whatsLive", scoresController.whatsLive);*/
router.get("/soccer", scoresController.soccer);

module.exports = router;