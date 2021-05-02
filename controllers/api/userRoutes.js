const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req,res) => {
    try {
        console.log(req.body)
        console.log("hello")
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
            }
            res.send("User already exists")
       })
       if (notFound){
            await User.create({
                username:req.body.username,
                password:req.body.password
           })
           res.redirect('/loginConfirm')
       }
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
})

module.exports = router