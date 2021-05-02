const sequelize = require('../dbConnection/connection')
const { User, Project } = require('../models')

const userData = require('./userData.json')
const projectData = require('./projectData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true })

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  })

  const project = await Project.bulkCreate(projectData, {
    individualHooks: true,
    returning: true,
  })

  process.exit(0)
};

seedDatabase()
