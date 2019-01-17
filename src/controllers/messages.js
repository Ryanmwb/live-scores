const messageQueries = require('../db/queries.messages');

module.exports = {
    create(req, res, next){
        console.log("about to create message.....")
        messageQueries.createMessage(req, (err, message) => {
            console.log("created message....")
            console.log(message)
            if(err){
                console.log(err)
            } else {
                console.log("about to redirect back to chatroom...")
                console.log(message)
                var team1 = decodeURIComponent(req.params.team1);
                var team2 = decodeURIComponent(req.params.team2);
                res.redirect(`/${team1}/${team2}/chat`)
            }
        })
    }
}