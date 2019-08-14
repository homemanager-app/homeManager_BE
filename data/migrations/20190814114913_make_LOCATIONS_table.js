
exports.up = function(knex) {
    return knex.schema.createTable('locations', tbl => {
        tbl.increments('id')


        tbl.integer('Street_Number')
        tbl.string('Street_Name')
        tbl.string('City')
        tbl.string('State')
        tbl.string('Zip_Code')
            .notNullable()

        tbl.integer('adminID').unsigned()
        tbl.foreign('adminID').references('users.id')
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('locations')
};
