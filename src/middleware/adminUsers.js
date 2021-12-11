function adminMiddleware (req, res, next){
    if (req.query.user =="Ada" || req.query.user =="Ariel" || req.query.user =="Debora" || req.query.user =="Kevin") {
        next()
    } else {
        res.send("No eres admin!")
    }
}

module.exports = adminMiddleware