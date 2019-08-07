
// EXPRESS
const express = require('express')

// KNEX DB
    const DB_KNEX = require('../../data/dbConfig.js')

// ROUTER
    const router = express.Router()
    
// MIDDLEWARE 
    const pwHash = require('../../middleware/pwHash.js')

// - GET - //
    router.get('/', async(req, res) => {
        console.log('registerRoute GET/')


        res.status(200).json({ message: 'GET/ --> in registerRouter'})
    })

// - POST - //
    /* Accepted Shape
        {
            "firstName": "STRING",
            "lastName": "STRING",
            "userName": "STRING",
            "pw": "STRING",
            "email": "STRING",
            "phone": TEL
            "adminCat": INTEGER, *
        }

        * Not required 
    */ 
    router.post('/', pwHash, async(req,res) => {
        console.log('registerRouter post/')
        console.log('newUser post:pwHash',req.body)

        DB_KNEX('users')
            .insert(req.body)
            .then( results => {
                console.log(results)
                res.status(201).json( 'Successful Registration' )
            })
            .catch( err => {
                res.status(422).json( {error: 'Unable to register new user'})
            })
    })

// EXPORTS
    module.exports = router