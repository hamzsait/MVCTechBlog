const router = require('express').Router();

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
    }
    catch(err){
        console.log(err)
    }
})

module.exports = router