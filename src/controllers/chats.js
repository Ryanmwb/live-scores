const chatQueries = require('../db/queries.chats');
const messageQueries = require('../db/queries.messages');
var api = require('sports-live');

module.exports = {
    chatRoom(req, res, next){
        var team1 = decodeURIComponent(req.params.team1);
        var team2 = decodeURIComponent(req.params.team2);
        var sport = req.params.sport;

        function getGame(sport, chat, view, messagess){
            api.getLiveScores(sport, team1, team2, (err, game) => {
                if(err){
                    console.log(err);
                } else {
                    res.render(view, {chat, messagess, sport, game});
                }
            })
        }

        chatQueries.findChat(team1, team2, (err, chat) => {
            if(err){
                console.log(err);
                res.redirect("/")
            } else if (chat != null){
                messageQueries.findMessages(chat.id, (err, messagess) => {
                    if(err){
                        console.log(err)
                        res.redirect("/")
                    } else {
                        console.log("4................")
                        getGame(sport, chat, "chats/show", messagess);
                    }
                })
            } else if(chat == null){
                chatQueries.createChat(team1, team2, (err, chat) => {
                    var messagess = null;
                    if(err){
                        console.log(err)
                        res.redirect("/")
                    } else {
                        getGame(sport, chat, "chats/show", messagess);
                    }  
                })
            }
        })
    }
}