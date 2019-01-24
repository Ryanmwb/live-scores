require("dotenv").config();
const path = require("path");
const viewsFolder = path.join(__dirname, "..", "views");
const logger = require('morgan');
const expressValidator = require("express-validator");
const session = require("express-session");
const flash = require("express-flash");
const passportConfig = require("./passport-config");
const bodyParser = require("body-parser");
var Sequelize = require('sequelize')
//var cookieParser = require('cookie-parser')
var SequelizeStore = require('connect-session-sequelize')(session.Store);

var sequelize = new Sequelize(
    "database",
    "username",
    "password", {
      "dialect": "postgres"
    }
  );
  
  module.exports = { 
    init(app, express){ 
      app.set("views", viewsFolder); 
      app.set("view engine", "ejs"); 
      app.use(bodyParser.urlencoded({ extended: true })); 
      app.use(express.static(path.join(__dirname, "..", "assets"))); 
      app.use(logger('dev')); 
      app.use(expressValidator()); 
      app.use(session({ 
        /*store: new SequelizeStore({
          db: sequelize
        }),*/
        secret: process.env.secret, 
        resave: false, 
        saveUninitialized: false, 
        cookie: { maxAge: 1.21e+9 } //set cookie to expire in 14 days 
      }));
      passportConfig.init(app); 
      app.use((req,res,next) => { 
        res.locals.currentUser = req.user; 
        next(); 
      }) 
      app.use(flash()); 
    } 
  }