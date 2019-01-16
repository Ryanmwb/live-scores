var api = require('sports-live')

module.exports = {
    soccer(req, res, next){
        api.getAllMatches('soccer', /*team name here,*/  function(err, games){ 
            if (err) { 
                console.log("error message is...") 
                console.log(err.message); 
            } else { 
                res.render("scores/scores", {games})
            } 
        }); 
    }, 
    scores(req, res, next){
        var sport = req.params.sport;
        console.log("sport is...")
        console.log(sport)
        api.getAllMatches(sport, function(err, games){ 
            if (err) { 
                console.log("error message is...") 
                console.log(err.message); 
            } else { 
                res.render("scores/scores", {games})
            } 
        }); 
    },
    /*whatsLive(req, res, next){
        var start = ["soccer", "football", "tennis", "baseball", "hockey", "cricket"]
        var live = []

        start.forEach((sport) => {
            api.getAllMatches(start[0],'insert team name here', function(err, games){ 
                console.log("starting for " + start[0])
                if (err) {
                    console.log("error message is...") 
                    console.log(err.message); 
                } else {
                    if(games != null){
                        console.log("one live sport is...")
                        console.log(start[0])
                        live.push(start[0])
                    } 
                } 
            }); 
        })
        console.log("live sports are...")
        console.log(live)
        res.render("static/whatsLive", {live})
    }*/
}

/*
1. if games returned is null call whatsLive 
2. whatsLive will call on each sport to see what is live
3. render a view showing each sport that is live

*/