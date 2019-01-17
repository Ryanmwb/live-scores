const express = require("express");
const router = express.Router();
const chatsController = require("../controllers/chats.js");

router.get("/:sport/:team1/:team2/chat", chatsController.chatRoom);

module.exports = router;