const bcrypt = require('bcryptjs')

function pwHash( req, res, next ) {
    console.log('pwHash Middleware')
    const newUser = req.body


    if (newUser) {
        const hash = bcrypt.hashSync(newUser.pw, 14)
        newUser.pw = hash
        req.newUser = newUser
        next()
    } else {
        res.status(400).json({ error:'Invalid Data Passed to pwHash middleware'})
    }
}

module.exports = pwHash