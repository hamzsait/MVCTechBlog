const User = require('./User')
const Project = require('./Project')

Project.belongsTo(User, {
    foreignKey:"user_id"
})

User.hasMany(Project,{
    foreignKey:"user_id"
})

module.exports = {
    User,
    Project
}