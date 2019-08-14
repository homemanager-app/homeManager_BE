
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        // ID 
        tbl.increments('id')

        tbl.string('firstName')
        tbl.string('lastName')
        tbl.string('userName')
            .unique()
        tbl.string('pw')
            .notNullable()
        tbl.string('email')
            .unique()
            .notNullable()
        tbl.string('phone')
            .unique()
            .notNullable()


        tbl.string('userType')
            .notNullable()
            .defaultTo('Property_Owner')
        tbl.integer('adminCat')
            .notNullable()
            .defaultTo(0)
        
        // tbl.integer('jobCat').notNullable().defaultTo(1)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
};
