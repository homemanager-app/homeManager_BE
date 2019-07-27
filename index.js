require('dotenv').config()

const server = require('./api/server.js')

const PORT = process.env.PORT || 1313

server.listen(PORT, () => {
    console.log(`=== homeManager server.js Listening on http://localHost:${PORT}`)
})