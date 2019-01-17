var api = require('sports-live')

module.exports = {
    soccer(req, res, next){
        api.getAllMatches('soccer', function(err, games){ 
            console.log("inside soccer api...")
            console.log(games)
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
    whatsLive(req, res, next){
        var start = ["soccer", "football", "tennis", "baseball", "hockey", "cricket"]
        var live = []

        start.forEach((sport) => {
            console.log("beginning of for each.  Sport is...")
            console.log(sport)
            api.getAllMatches(sport, function(err, games){ 
                console.log("starting for ...")
                console.log(sport)
                if (err) {
                    console.log("error message is...") 
                    console.log(err.message); 
                } else {
                    if(games != null){
                        console.log("one live sport is...")
                        console.log(sport)
                        live.push(sport)
                    } 
                } 
            }); 
        })
        console.log("live sports are...")
        console.log(live)
        res.render("static/whatsLive", {live})
    },
    /*newWhatsLive(req, res, next){
        var start = ["soccer", "football", "tennis", "baseball", "hockey", "cricket"];
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