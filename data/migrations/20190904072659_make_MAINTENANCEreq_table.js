
exports.up = function(knex) {
    return knex.schema.createTable('MAINTENANCE_req', tbl => {
        tbl.increments('id')
        
        tbl
            .integer('locationID').unsigned()
            .references("id").inTable("LOCATIONS")
            .onUpdate("cascade").onDelete("cascade")

        tbl
            .integer('submittedBy').unsigned()
            .references("id").inTable("USERS")
            .onUpdate("cascade").onDelete("cascade")
            
        tbl
            .integer('assignedTo').unsigned()
            .references("id").inTable("USERS")
            .onUpdate("cascade").onDelete("cascade")
        tbl
            .string('severity')
            .notNullable()
        tbl
            .string('description')
            .notNullable()

        tbl
            .timestamps(true, true)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('MAINTENANCE_req')
};
