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
    }, 
    createMessage(req, callback){
        return Message.create({
            chatId: req.params.chatId,
            userId: req.user.id,
            username: req.user.username,
            message: req.body.message
        })
        .then((message) => {
            callback(null, message)
        })
        .catch((err) => {
            callback(err)
        })
    }
}