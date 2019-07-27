
const dbConnection = process.env.DATABASE_URL

module.exports = {

    development: {
        client: 'sqlite3',
        connection: {
        filename: './data/homeManager.sqlite3'
        },
        useNullAsDefault: true,
        migrations: {
        directory: './data/migrations'
        },
        seeds: {
        directory: './data/seeds'
        }
    },

    production: {
        client: 'pg',
        connection: dbConnection,
        migrations: {
            directory: './data/migrations'
        },
        seeds: {
            directory: './data/seeds'
        }
    }

}