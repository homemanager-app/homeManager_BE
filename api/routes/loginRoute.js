const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secrets = require('../../secrets.js')

// EXPRESS
    const express = require('express')

// KNEX DB
    const DB_KNEX = require('../../data/dbConfig.js')

// ROUTER
    const router = express.Router()

// MIDDLEWARE

// - GET - //
    router.get('/', async(req, res) => {
        console.log('loginRoute GET/')

        res.status(200).json({ message: 'GET/ --> in loginRouter'})
    })
// - POST - //
    /* Accepted Shape
        {
            "userName": "STRING",
            "pw": "STRING",
        }
    
    */ 

    router.post('/', async(req,res) => {
        console.log('loginRouter post/')
        
        console.log('req.body', req.body)
        const { userName , pw } = req.body
        console.log('userName, pw', userName, pw)

        DB_KNEX('users').where('userName', userName ).first()
            .then( user => {
                console.log('user', user )

                if (user) {
                    console.log('user = TRUE', user)
                }
                const pwVerification = bcrypt.compareSync(pw, user.pw);
                console.log('pwVerification', pwVerification)
                
                if (user) {
                    console.log('secrets', secrets)

                    const token = jwt.sign(
                        {
                            userID: user.id,
                            userName: user.userName
                        },
                        secrets.jwtSecret,
                        {
                            expiresIn: '2h'
                        }
                    )
                    console.log('token', token)

                    res.status(200).json({
                        message: 'welcome to the homeManager',
                        token
                    })
                } else {
                    res.status(401).json( {error: 'Unable to Login'})
                }

            })
            .catch( err => {
            
            })
    })
// - PUT - //
// - DEL - //

// EXPORTS
module.exports = router