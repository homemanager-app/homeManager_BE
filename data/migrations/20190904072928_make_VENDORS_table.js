
exports.up = function(knex) {
    return knex.schema.createTable('VENDORS', tbl => {
        tbl.increments('id')
        
        tbl
            .string('name')
            .notNullable()

        tbl
            .string('phone')
            .notNullable()

        tbl
            .string('email')
            .notNullable()

        tbl
            .integer('addressInteger')
            .notNullable()
            
        tbl
            .string('street')
            .notNullable()
            
        tbl
            .string('city')
            .notNullable()
            
        tbl
            .string('state')
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('VENDORS')
};
