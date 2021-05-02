const router = require('express').Router();
const bycrpt = require('bcrypt');
const { User } = require('../../models');

router.post('/login', async (req,res) => {
    try {
        const user = await User.findOne({where:{username:req.body.username}})
        if(!user){
            res.status(400).json({message:"Incorrect username"})
            return
        }

        const validPassword = await user.checkPassword(req.body.password)

        if(!validPassword){
            res.status(400).json({message:"Invalid password"})
            return
        }
        req.session.save(() => {
            req.session.user_id = user.id;
            req.session.logged_in = true;
            
            res.render("homepage",{logged_in:req.session.logged_in});
        })
    }
    catch (err){
        console.log(err)
    }
})

router.post('/signup',async (req,res)=>{
    try{
       let notFound = true;
       (await User.findAll()).map(user => {
            if (user.username == req.body.username){
                notFound = false
                res.status(403).json({message:"User already exists!"})
            }
       })
       if (notFound){
            await User.create({
                username:req.body.username,
                password:req.body.password
           })
           res.render('signupConfirm',{logged_in:req.session.logged_in})
        //    req.session.save(() => {
        //         req.session.user_id = user.id;
        //         req.session.logged_in = true;
                
        //    }
        }
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
})

module.exports = router