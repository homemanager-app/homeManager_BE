// EXPRESS
    const express = require('express')

// KNEX DB
    const DB_KNEX = require('../../data/dbConfig.js')

// ROUTER
    const router = express.Router()

// MIDDLEWARE

// - GET - //
    router.get('/', async(req,res) => {
        console.log('locationsRouter get/')
        DB_KNEX('MAINTENANCE')
            .then( ALL_maintenanceRequests => {
                console.log('ALL_maintenanceRequests', ALL_maintenanceRequests )
                
            })
            .catch( err => {
                res.status(500).json( { error: 'Unable to Get all maintenance requests'} )
            })
    })

// - POST - //
// - PUT - //
// - DEL - //

// EXPORTS
    module.exports = router
