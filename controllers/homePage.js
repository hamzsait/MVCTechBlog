const router = require('express').Router();
const { Project } = require('../models');


router.get("/", async (req, res) => {
    try{
        output = []
        const projects = await Project.findAll()
        projects.map(project => {
            output.push({
                name: project.name,
                description: project.description,
                user: project.user_id
            })
        })
        console.log(output)
        res.status(200).render('homepage', { projects: output })
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
