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
        console.log(req.body)
        console.log(User.findAll())
    }
    catch(err){
        console.log(err)
    }
})

module.exports = router