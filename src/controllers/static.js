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
        console.log("User is...")
        console.log(newUser)
        if(newUser.password != newUser.passwordConf){
            console.log("password doesn't match...")
            req.flash("errorMessage", "Password did not match")
            res.redirect("/sign_up")
        }
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
    }
}