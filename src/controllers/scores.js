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