var api = require('sports-live');

module.exports = {
    allScores(req, res, next){
        var sport = req.params.sport;
        api.getAllMatches(sport, (err, games) => {
            if(err){
                console.log(err.message)
                res.redirect("/")
            } else {
                res.render("scores/scores", {games, sport})
            }
        })
    },
    updateScores(req, res, next) {
        var { sport, team1, team2 } = req.params;
        api.getLiveScores(sport, team1, team2, function(err, game) {
            if ( err != null ) {
                return res.json({ score1: -1, score2: -1 });
            }
            
            var score1 = game.score.split("-", 2)[0];
            var score2 = game.score.split("-", 2)[1];
            res.json({ score1, score2 });
        });
    },
    whatsLive(req, res, next){
        var start = ["soccer", "football", "tennis", "baseball", "hockey"]
        var live = [];
        var count =0;

        for(var i=0; i<start.length; i++){
            console.log("Loop #......")
            console.log(count)
            api.getAllMatches(start[i], (err, games) => {
                if(err){
                    console.log(err)
                    res.redirect("/")
                } else {
                    live.push(start[i]);
                    count = count + 1
                    if(count >= 6){
                        console.log("count is....")
                        console.log(count)
                        console.log("live is...")
                        console.log(live)
                        res.render("static/whatsLive", {live})
                    }
                }
            })
        }        
    }
    /*newWhatsLive(req, res, next){
        var start = ["soccer", "football", "tennis", "baseball", "hockey"];
        var live = [];
        var counter = 0;
        
        start.forEach((sport) => {
            counter = counter + 1;
            api.getAllMatches(sport, (err, games) => { 
                if(games != null){
                    live.push(sport)
                } 
            })
            counter = counter -1;
            if (counter === 0) {
                res.render("static/whatsLive", {live})
                console.log("live is ...")
                console.log(live)
            }
        })
    }  */
}

/*
1. if games returned is null call whatsLive 
2. whatsLive will call on each sport to see what is live
3. render a view showing each sport that is live

*/