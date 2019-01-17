const Chat = require("./models").Chat;

module.exports = {
    findChat(team1, team2, callback){
        return Chat.findOne({
            where: {team1: team1, team2: team2}
        })
        .then((chat) => {
            callback(null, chat)
        })
        .catch((err) => {
            callback(err)
        })
    },
    createChat(team1, team2, callback){
        return Chat.create({
            team1: team1,
            team2: team2
        })
        .then((chat) => {
            callback(null, chat)
        })
        .catch((err) => {
            callback(err)
        })
    }
}