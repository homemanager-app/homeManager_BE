
exports.up = function(knex) {
    return knex.schema.createTable('LOCATIONS', tbl => {
        tbl.increments('id')


        tbl
            .integer('Street_Number')
            .notNullable()

        tbl
            .string('Street_Name')
            .notNullable()

        tbl
            .string('City')
            .notNullable()

        tbl
            .string('State')
            .notNullable()

        tbl
            .string('Zip_Code')
            .notNullable()

        tbl.integer('adminID').unsigned()
        tbl.foreign('adminID').references('users.id')
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('LOCATIONS')
};
