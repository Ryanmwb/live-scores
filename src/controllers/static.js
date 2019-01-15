module.exports = {
    home(req, res, next){
        res.render("static/home")
    },
    signUpForm(req, res, next){
        res.render("users/signUp")
    }
}