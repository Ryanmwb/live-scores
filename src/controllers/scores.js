
module.exports = {
    display(req, res, next){
        var api = require('sports-live')

        var tennisScores = api.getAllMatches('soccer','muslim', function(err,matches){ 
            if (err) { 
                console.log(err); 
            } else { 
                console.log(matches); 
            } 
        });

        console.log("firing display")
        tennisScores
        res.render("scores/scores")
    }
}