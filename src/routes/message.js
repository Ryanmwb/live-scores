const express = require("express");
const router = express.Router();
const messagesController = require("../controllers/messages.js");

router.get("/scores/:sport", scoresController.scores);

module.exports = router;