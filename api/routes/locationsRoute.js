// EXPRESS
    const express = require('express')

// KNEX DB
    const DB_KNEX = require('../../data/dbConfig.js')

// ROUTER
    const router = express.Router()

// MIDDLEWARE

// - GET - //
    // 1 //
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

    // 2 //
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
            "Street_Number": Integer
            "Street_Name": "String",
            "City": "String",
            "State": "String",
            "Zip_Code": "String",
        } 
    */

    router.post('/:id', async(req,res) => {
        console.log('locationRouter post/')
        const { id } = req.params

        console.log('req.body', req.body)

        let bodyToPass = req.body
        bodyToPass.adminID = id

        console.log('bodyToPass',bodyToPass)

        DB_KNEX('locations')
            .insert(req.body)
            .then( result => {
                console.log('result', result )
                res.status(200).json( result )
            })
            .catch( err => {
                res.status(500).json( { error: 'Unable to Add Location'} )
            })
    })

// - PUT - //
    router.put('/:id', async(req,res) => {
        console.log('locationRouter put/')
        const { id } = req.params

        DB_KNEX('locations')
            .where('id', id)
            .update(req.body)
            .then( updatedLocation => {
                console.log('updatedLocation', updatedLocation )
                res.status(200).json( updatedLocation )
            })
            .catch( err => {
                res.status(500).json( { error: 'Unable to Update Location'} )
            })
    })


// - DEL - //
    router.delete('/:id', async(req,res) => {
        console.log('locationRouter delete/')
        
        const { id } = req.params;
        DB_KNEX('locations')
            .where('id', id)
            .del()
            .then( result => {
                console.log('result', result )
                res.status(200).json( result )
            })
            .catch( err => {
                res.status(500).json( { error: 'Unable to Delete Location'} )
            })
    })

// EXPORTS
    module.exports = router