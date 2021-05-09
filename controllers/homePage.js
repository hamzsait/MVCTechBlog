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
    projects.forEach((project) => {
        if (project.dataValues.user_id == id){
            const user = User.findByPk(project.dataValues.user_id)
            output.push({
                name: project.name,
                description: project.description,
                user: user.username,
                id: project.id
            })
        }
        if (projects[projects.length - 1] === project){
            //console.log("HRERERE")
            console.log(output)
            console.log("^The Line Above is line 35^")
            return output
        }
    })
}

router.get("/", async (req, res) => {
    try{
        if(req.session.logged_in){
            const userData = await User.findByPk(req.session.user_id).then(async user =>{
                console.log(user)
                const homedata = await getHomeData(req.session.user_id)
                console.log(homedata)
                console.log("^The Line Above is line 46^")
                res.render("homepage",{
                    logged_in:req.session.logged_in,
                    projects:output,
                    user:user.username
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

router.get('/edit/:id', async (req, res) => {
    try{
        await Project.findByPk(req.params.id).then(async (answer) => {
                if(req.session.logged_in){
                    if(req.session.user_id == answer.dataValues.user_id){
                        await User.findByPk(req.session.user_id).then(user=>{
                            res.status(200).render('edit',{logged_in:req.session.logged_in, projects:answer.dataValues,user:user.username})
                        })
                }
                else{
                    throw err
                }
            }
            else{
                throw err
            }
        })
    }
    catch{
        res.status(404).json("Access Denied")
    }
})

router.get("/createPost", async (req,res) =>{
    try{
        if(req.session.logged_in){
            await User.findByPk(req.session.user_id).then(user =>{
            res.status(200).render("new",{logged_in:req.session.logged_in,user:user.username})
            })
        }
        else{
            throw err
        }
    }
    catch (err){
        throw err
    }
})

module.exports = router
