module.exports = {
    index : (req, res) =>{
        res.render('index')
    },  
    admin: (req, res) =>{
        let user = req.query.user
         res.render('admin',{
            user
        }) 
    }
}