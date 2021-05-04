const router = require('express').Router();
const { Project, User } = require('../../models');


router.delete('/:id', async (req, res) => {
    console.log("accessed")
    await Project.destroy({where: {id:req.params.id}})
    res.status(200).redirect('/')
})

router.put('/:id', async (req, res) => {
    await Project.update(
        {name:req.body.name, description:req.body.description},
        {where: {id: req.body.id}}
    )
})

router.post('/', async (req, res) => {
    await User.findOne({where:{username:req.body.user}}).then((response) =>{
        output = {
            name:req.body.name,
            description:req.body.description,
            user_id:response.dataValues.id
        }
        Project.create(output)
    })
})

module.exports = router