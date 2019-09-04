
exports.up = function(knex) {
    return knex.schema.createTable('USERS', tbl => {
        // ID 
        tbl.increments('id')

        tbl
            .string('firstName')
            .notNullable()
        tbl
            .string('lastName')
            .notNullable()
        tbl
            .unique()
            .string('userName')
            .notNullable()
        tbl
            .string('pw')
            .notNullable()
        tbl
            .string('email')
            .unique()
            .notNullable()

        tbl.string('phone')
            .unique()
            .notNullable()


        tbl.string('userType')
            .defaultTo('Property_Owner')
            .notNullable()

        tbl.integer('adminCat')
            .defaultTo(0)
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('USERS')
};
