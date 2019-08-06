// EXPRESS
    const express = require('express')

// KNEX DB
    const DB_KNEX = require('../../data/dbConfig.js')

// ROUTER
    const router = express.Router()

// MIDDLEWARE

// - GET - //
    router.get('/', async(req,res) => {
        console.log('usersRouter get/')
        res.status(200).json({ message: 'GET/ --> in usersRouter'})
    })

// - POST - //
// - PUT - //
// - DEL - //

// EXPORTS
    module.exports = router