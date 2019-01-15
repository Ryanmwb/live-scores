
module.exports = {
    soccer(req, res, next){
        var api = require('sports-live')

        var soccerScores = api.getAllMatches('soccer','insert team name here', function(err, games){ 
            if (err) { 
                console.log("error message is...") 
                console.log(err.message); 
            } else { 
                console.log("firing display")
                console.log(games)
                res.render("scores/scores", {games})
            } 
        }); 
    }, 
    football(req, res, next){
        var api = require('sports-live')

        var soccerScores = api.getAllMatches('football',/*'insert team name here',*/ function(err, games){ 
            if (err) {
                console.log("error message is...") 
                console.log(err.message); 
            } else { 
                console.log("firing display")
                console.log(games)
                res.render("scores/scores", {games})
            } 
        }); 
    }, 
}