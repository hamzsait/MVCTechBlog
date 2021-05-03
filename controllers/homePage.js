const router = require('express').Router();
const withAuth = require('../utils/auth')
const { User, Project } = require('../models');


async function getDashboardData(){
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
    return output
}

router.get("/", async (req, res) => {
    try{
        console.log(req.session.logged_in)
        const renderedData = await getDashboardData().then(output => {
        res.status(200).render('homepage', { projects: output, logged_in:req.session.logged_in })
        })
    }
    catch (err){
        res.json(err)
    }
})

router.get("/login", async (req,res) => {
    try{
        res.render('login',{logged_in:req.session.logged_in})
    }
    catch(err){
        res.json(err)
    }
})

router.get("/logoutConfirm",async (req,res)=>{
    try{
        res.render("logoutConfirm",{logged_in:req.session.logged_in})
    }
    catch(err){
        res.json(err)
    }
})

router.get("/signup", async (req,res) => {
    try{
        res.render('signup',{logged_in:req.session.logged_in})
    }
    catch(err){
        res.json(err)
    }
})

router.get("/dashboard", async (req,res) => {
    try{
        console.log(req.session.user_id)
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
        res.status(200).render('homepage', { projects: output, logged_in:req.session.logged_in })
    }
    catch (err){
        res.json(err)
    }
})

router.get('/loginConfirm', (req,res) => {
    try{
        res.render("loginConfirm",{logged_in:req.session.logged_in})
    }
    catch(err){
        res.json(err)
    }
})

router.get('/signUpConfirm', (req,res) => {
    try{
        res.render("signUpConfirm",{logged_in:req.session.logged_in})
    }
    catch(err){
        res.json(err)
    }
})

module.exports = router
