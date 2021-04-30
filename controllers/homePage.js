const router = require('express').Router();
// add database connection here later
// add authention function in utils later

router.get("/", async (req, res) => {
    try{
        res.render('homepage')
    }
    catch (err){
        res.json(err)
    }
})
