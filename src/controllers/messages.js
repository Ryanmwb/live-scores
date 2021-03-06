const messageQueries = require('../db/queries.messages');

module.exports = {
    create(req, res, next){
        var team1 = decodeURIComponent(req.params.team1);
        var team2 = decodeURIComponent(req.params.team2);
        var sport = req.params.sport;

        if(req.body.message.length > 254){
            req.flash("notice", "You exceeded the 254 char limit.  Message did not send.")
            res.redirect(`/${sport}/${team1}/${team2}/chat`)
        }
    
        messageQueries.createMessage(req, (err, message) => {
            if(err){
                console.log(err)
            } else {
                console.log("about to redirect back to chatroom...")
                res.redirect(`/${sport}/${team1}/${team2}/chat`)
            }
        })
    }
}