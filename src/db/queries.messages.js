const Message = require("./models").Message;

module.exports = {
    findMessages(chatId, callback){
        return Message.findAll({
            where: {chatId: chatId}
        })
        .then((messages) => {
            callback(null, messages)
        })
        .catch((err) => {
            callback(err)
        })
    }
}