// EXPRESS
const express = require('express')

// KNEX DB
    const DB_KNEX = require('../../data/dbConfig.js')

// ROUTER
    const router = express.Router()

// MIDDLEWARE

// - GET - //
    router.get('/', async(req, res) => {
            console.log('locationsRouter get/')
            DB_KNEX('locations')
                .then( ALL_locations => {
                    console.log('ALL_locations', ALL_locations)
                    res.status(200).json( ALL_locations )
                })
                .catch( err => {
                    res.status(500).json( {error: 'Unable to Get Locations'} )
                })
        
    })

    router.get('/:id', async(req,res) => {
        console.log('locationsRouter get/')
        const { id } = req.params;

        DB_KNEX('locations').where('adminID', id)
            .then( ID_locations => {
                console.log('ID_locations', ID_locations )
                res.status(200).json( ID_locations )
            })
            .catch( err => {
                res.status(500).json( {error: 'Unable to Get Locations'} )
            })
    })


// - POST - //
    /* Accepted SHape
        {

        } 
    */

    router.post('/', async(req,res) => {
        console.log('locationRouter post/')
        
    })

// - PUT - //
// - DEL - //

// EXPORTS
    module.exports = router