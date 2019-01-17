const express = require("express");
const router = express.Router();
const chatsController = require("../controllers/chats.js");

router.get("/:team1/:team2/chat", chatsController.chatRoom);

module.exports = router;