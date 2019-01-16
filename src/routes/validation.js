const User = require("../db/models").User;

module.exports = {
 
    validateUsers(req, res, next) {
      if(req.method === "POST") {
 
 // #1
        //req.checkBody("name", "cannot be empty").isLength({min: 1});  This works for signUp but not signIn
        req.checkBody("email", "must be valid").isEmail();
        req.checkBody("password", "must be at least 6 characters in length").isLength({min: 6})
        req.checkBody("passwordConf", "must match password provided").optional().matches(req.body.password);
      }
 
      const errors = req.validationErrors();

      if (errors) {
        req.flash("error", errors);
        return res.redirect(req.headers.referer);
      } else {
        return next();
      }
    }
 }