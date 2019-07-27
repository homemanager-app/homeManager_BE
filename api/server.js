// Dot ENV
require('dotenv').config()

// EXPRESS SERVER
    const express = require('express')
    const server = express()

// IMPORT MIDDLEWARE 

    // const helmet = require('helmet')
    // const logger = require('morgan')
    // const cors = require('cors')
    
// IMPORT ROUTES
    const routes = require('./routes/index.js')
    
// USE MIDDLEWARE
    server.use(
        express.json(),
        // helmet(),
        // cors()
    )

// USE ROUTES
    server.use('/', routes)

// Root Route
    server.get('/', (req,res) => {
        res.status(200).json({api: 'homeManager root server Running'})
    })

// EXPORTS
module.exports = server