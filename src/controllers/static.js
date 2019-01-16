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
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        let newUser = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            passwordConf: req.body.passwordConf
        };

        let msg = {
            to: newUser.email,
            from: 'liveScores@gmail.com',
            subject: 'Welcome to Live-Scores',
            html: 'Visit Live-Score anytime to get the most up to date scores for your favorite sports and teams!'
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
        });
        sgMail.send(msg)
        .catch((err) => {
            console.log(err)
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