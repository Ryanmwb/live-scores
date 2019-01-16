const userQueries = require('../db/queries.users')
const passport = require('passport')

module.exports = {
    home(req, res, next){
        res.render("static/home")
    },
    signUpForm(req, res, next){
        res.render("users/signUp")
    }, 
    signUp(req, res, next){
        let newUser = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            passwordConf: req.body.passwordConf
        }
        console.log("req.body is...")
        console.log(req.body)
        console.log("User is...")
        console.log(newUser)
        
        userQueries.createUser(newUser, (err, user) => {
            console.log("starting creating user...")
            if(err){
                req.flash("error", err)
                res.redirect("/sign_up")
            } else{
                passport.authenticate("local")(req, res, () => {
                    req.flash("notice", "You've successfully signed in!");
                    res.redirect("/");
                })
            }
        })
    }, 
    signInForm(req, res, next){
        res.render("users/signIn")
    },
    signIn(req, res, next){
        passport.authenticate("local")(req, res, function(){
            if(!req.user){
              req.flash("notice", "Sign in failed. Please try again.")
              res.redirect("/sign_in");
            } else {
              req.flash("notice", "You've successfully signed in!");
              res.redirect("/");
            }
        })
    }, 
    signOut(req, res, next){
        req.logout();
        res.redirect("/")
        req.flash("Notice", "You've successfully logged out.");
    }
}