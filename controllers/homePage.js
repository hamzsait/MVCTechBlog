const router = require('express').Router();

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

router.get("/signup", async (req,res) => {
    try{
        res.render('signup')
    }
    catch(err){
        res.json(err)
    }
})

router.get("/dashboard", async (req,res) => {
    try{
        res.render("dashboard")
    }
    catch(err){
        res.json(err)
    }
})

router.get('/successlogin', (req,res) => {
    try{
        res.render("successlogin")
    }
    catch(err){
        res.json(err)
    }
})

module.exports = router
