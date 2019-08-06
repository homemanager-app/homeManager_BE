// EXPRESS
const router = require('express').Router()

// IMPORT ROUTES
    const registerRoute = require('./registerRoute.js')
    const loginRoute = require('./loginRoute.js')
    const usersRoute = require('./usersRoute.js')
    const locationsRoute = require('./locationsRoute.js')
    


// ATTACH ROUTES
    router.use('/register', registerRoute)
    router.use('/login', loginRoute)
    router.use('/users', usersRoute)
    router.use('/locations', locationsRoute)

// EXPORTS
    module.exports = router