const chatQueries = require('../db/queries.chats');
const messageQueries = require('../db/queries.messages');

module.exports = {
    chatRoom(req, res, next){
        var team1 = decodeURIComponent(req.params.team1);
        var team2 = decodeURIComponent(req.params.team2);

        chatQueries.findChat(team1, team2, (err, chat) => {
            if(err){
                console.log(err);
                res.redirect("/")
            } else if (chat != null){
                messageQueries.findMessages(chat.id, (err, messages) => {
                    if(err){
                        console.log(err)
                        res.redirect("/")
                    } else {
                        console.log("chat is...")
                        console.log(chat)
                        console.log("Messages is ..")
                        console.log(messages)
                        res.render("chats/show", {messages, chat})
                    }
                })
            } else if(chat == null){
                chatQueries.createChat(team1, team2, (err, chat) => {
                    var messages = null;
                    res.render("chats/show", {chat, messages})
                })
            }
        })
    }
}