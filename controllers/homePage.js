const router = require('express').Router();
const { User, Project } = require('../models');


router.get("/", async (req, res) => {
    try{
        output = []
        const projects = await Project.findAll()
        projects.map(async (project) => {
            const user = await User.findByPk(project.user_id)
            output.push({
                name: project.name,
                description: project.description,
                user: user.username
            })
        })
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
        output = []
        const projects = await Project.findAll()
        projects.map(async (project) => {
            const user = await User.findByPk(project.user_id)
            output.push({
                name: project.name,
                description: project.description,
                user: user.username
            })
        })
        res.status(200).render('homepage', { projects: output })
    }
    catch (err){
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
