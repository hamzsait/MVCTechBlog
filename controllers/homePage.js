const router = require('express').Router();
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
        const renderedData = await getDashboardData().then(output => {
        console.log(output)
        res.status(200).render('homepage', { projects: output, logged_in:req.session.logged_in })
        })
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
        res.status(200).render('homepage', { projects: output, logged_in:req.session.logged_in })
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

router.get('/signUpConfirm', (req,res) => {
    try{
        res.render("signUpConfirm")
    }
    catch(err){
        res.json(err)
    }
})

module.exports = router
