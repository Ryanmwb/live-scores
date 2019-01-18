const chatQueries = require('../db/queries.chats');
const messageQueries = require('../db/queries.messages');
var api = require('sports-live');

module.exports = {
    chatRoom(req, res, next){
        var team1 = decodeURIComponent(req.params.team1);
        var team2 = decodeURIComponent(req.params.team2);
        var sport = req.params.sport;
        var score ;
        var render  ;

        function getScore(){
            api.getLiveScores(sport, team1, team2 ,function(err,match) { 
                if (err) {
                     console.log(err.message); 
                } else { 
                    console.log("FIVE......")
                    console.log("Match is...")
                    console.log(match)
                    score = match.score; 
                    console.log("score is....")
                    console.log(score)
                    render;
                } 
            });
        }

        chatQueries.findChat(team1, team2, (err, chat) => {
            console.log("ONE......")
            if(err){
                console.log(err);
                res.redirect("/")
            } else if (chat != null){
                messageQueries.findMessages(chat.id, (err, messagess) => {
                    if(err){
                        console.log(err)
                        res.redirect("/")
                    } else {
                        res.render("chats/show", {messagess, chat, sport})
                    }
                })
            } else if(chat == null){
                console.log("TWO....")
                chatQueries.createChat(team1, team2, (err, chat) => {
                    console.log("THREE........")
                    var messagess = null;
                    if(err){
                        console.log(err)
                        res.redirect("/")
                    } else {
                        console.log("FOUR........")
                        render = res.render("chats/show", {chat, messagess, sport, score});
                        getScore(render);
                        console.log("ScORe is....");
                        console.log(score);
                    }  
                })
            }
        })
    },
}