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

async function getHomeData(id){
    output = []
    const projects = await Project.findAll()
    projects.map(async (project) => {
        if (project.user_id == id){
            const user = await User.findByPk(project.user_id)
            output.push({
                name: project.name,
                description: project.description,
                user: user.username,
                id: project.id
            })
        }
    })
    return output
}

router.get("/", async (req, res) => {
    try{
        if(req.session.logged_in){
            await User.findByPk(req.session.user_id).then(async user =>{
            const projects = await getHomeData(req.session.user_id).then(async output=> {
                res.render("homepage",{
                    logged_in:req.session.logged_in,
                    projects:output,
                    user:user.username
                })
            })
        })
        }
        else{
            res.redirect("/login")
        }
    }
    catch (err){
        res.json(err)
    }
})

router.get("/dashboard", async (req,res) => {
    try{
        console.log(req.session.logged_in)
        const renderedData = await getDashboardData().then(async output => {
        if(req.session.logged_in){
            await User.findByPk(req.session.user_id).then(user =>{
                res.render('dashboard', {
                    logged_in:req.session.logged_in,
                    user:user.username,
                    projects:output
                })
            })
        }
        else{
            res.render('dashboard',{projects:output})
        }
       })
    }
    catch (err){
        res.json(err)
    }
})

router.get("/login", async (req,res) => {
    try{
        if(req.session.logged_in){
            await User.findByPk(req.session.user_id).then(user=>{
                res.render('login',{logged_in:req.session.logged_in, user:user.username })
            })
        }
        else{
            res.render('login',{logged_in:req.session.logged_in})
        }
        
    }
    catch(err){
        res.json(err)
    }
})

router.get("/logoutConfirm",async (req,res)=>{
    try{
        if(req.session.logged_in){
            await User.findByPk(req.session.user_id).then(user=>{
                res.render('logoutConfirm',{logged_in:req.session.logged_in, user:user.username })
            })
        }
        else{
            res.render('logoutConfirm',{logged_in:req.session.logged_in})
        }
        
    }
    catch(err){
        res.json(err)
    }
})

router.get("/signup", async (req,res) => {
    try{
        if(req.session.logged_in){
            await User.findByPk(req.session.user_id).then(user=>{
                res.render('signup',{logged_in:req.session.logged_in, user:user.username })
            })
        }
        else{
            res.render('signup',{logged_in:req.session.logged_in})
        }
        
    }
    catch(err){
        res.json(err)
    }
})

router.get('/loginConfirm', async (req,res) => {
    try{
        if(req.session.logged_in){
            await User.findByPk(req.session.user_id).then(user=>{
                res.render('loginConfirm',{logged_in:req.session.logged_in, user:user.username })
            })
        }
        else{
            res.render('loginConfirm',{logged_in:req.session.logged_in})
        }
        
    }
    catch(err){
        res.json(err)
    }
})

router.get('/signUpConfirm', async (req,res) => {
    try{
        if(req.session.logged_in){
            await User.findByPk(req.session.user_id).then(user=>{
                res.render('signUpConfirm',{logged_in:req.session.logged_in, user:user.username })
            })
        }
        else{
            res.render('signUpConfirm',{logged_in:req.session.logged_in})
        }
        
    }
    catch(err){
        res.json(err)
    }
})

module.exports = router
