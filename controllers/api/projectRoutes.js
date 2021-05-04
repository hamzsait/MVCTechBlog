const router = require('express').Router();
const { Project } = require('../../models');


router.delete('/:id', async (req, res) => {

    const projectData = await Project.destroy({where: {id:req.params.id}})
    res.status(200).redirect('/')
})

module.exports = router