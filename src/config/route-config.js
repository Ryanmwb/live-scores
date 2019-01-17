module.exports = {
    init(app){
      const staticRoutes = require("../routes/static");
      const scoreRoutes = require("../routes/score")
      const userRoutes = require("../routes/user");
      //const messageRoutes = require("../routes/message");
      const chatRoutes = require("../routes/chat")

      app.use(staticRoutes);
      app.use(scoreRoutes);
      app.use(userRoutes);
      //app.use(messageRoutes);
      app.use(chatRoutes);
    }
}