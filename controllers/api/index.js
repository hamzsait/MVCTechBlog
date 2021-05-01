const router = require('express').Router()
const userRoutes = require('./loginAPI')

router.use('/users', userRoutes)

module.exports = router