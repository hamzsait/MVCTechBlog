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

module.exports = router