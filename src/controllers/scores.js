
module.exports = {
    display(req, res, next){
        console.log("firing display")
        res.render("scores/scores")
    }
}