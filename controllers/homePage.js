const router = require('express').Router();
// add database connection here later
// add authention function in utils later

router.get("/home", async (req, res) => {
    try{
        res.render('homepage')
    }
    catch (err){
        res.json(err)
    }
})

router.get("/login", async (req,res) => {
    try{
        res.render('login')
    }
    catch(err){
        res.json(err)
    }
})

router.get("dashboard", async (res,res) => {
    try{
        res.render("dashboard")
    }
    catch(err){
        res.json(err)
    }
})

module.exports = router
