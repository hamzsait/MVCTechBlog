const router = require('express').Router();

router.get("/", async (req, res) => {
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

router.get('/loginConfirm', (req,res) => {
    try{
        res.render("loginConfirm")
    }
    catch(err){
        res.json(err)
    }
})

module.exports = router
