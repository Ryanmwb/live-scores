const express = require("express");
const router = express.Router();
const messagesController = require("../controllers/messages.js");

router.post("/:sport/:chatId/:team1/:team2/message/create", messagesController.create);

module.exports = router;