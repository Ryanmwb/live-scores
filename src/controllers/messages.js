const messageQueries = require('../db/queries.messages');

module.exports = {
    create(req, res, next){
        var team1 = decodeURIComponent(req.params.team1);
        var team2 = decodeURIComponent(req.params.team2);
    
        messageQueries.createMessage(req, (err, message) => {
            if(err){
                console.log(err)
            } else {
                console.log("about to redirect back to chatroom...")
                res.redirect(`/${team1}/${team2}/chat`)
            }
        })
    }
}