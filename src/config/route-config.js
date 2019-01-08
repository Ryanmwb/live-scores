module.exports = {
    init(app){
      const staticRoutes = require("../routes/static");
      const scoreRoutes = require("../routes/score")
      app.use(staticRoutes);
      app.use(scoreRoutes);
    }
}