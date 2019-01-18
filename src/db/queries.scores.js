var api = require('sports-live');

module.exports = {
    findGame(sport, team1, team2, callback){
        return api.getLiveScores(sport, team1, team2, callback)
        .then((game) => {
            callback(null, game)
        })
        .catch((err) =>{
            callback(err)
        })
    },
    allGames(sport, callback){
        console.log("TWO.....")
        return api.getAllMatches(sport, callback)
        .then((games) => {
            console.log("THREE....")
            console.log(games)
            callback(null, games)
        })
        .catch((err) => {
            callback(err)
        })
    },
    test(sport){
        
    }
}