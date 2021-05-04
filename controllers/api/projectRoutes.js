const router = require('express').Router();
const { Project } = require('../../models');


router.delete('/:id', async (req, res) => {
    await Project.destroy({where: {id:req.params.id}})
    res.status(200).redirect('/')
})

router.put('/:id', async (req, res) => {
    if (req.body.id == req.params.id){
        Project.update(
            {where:{id:req.body.id}},
            {
                name:req.body.name,
                description:req.body.name,
            }
        )
    }
})

module.exports = router