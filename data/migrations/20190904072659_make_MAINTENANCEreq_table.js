
exports.up = function(knex) {
    return knex.schema.createTable('MAINTENANCE_req', tbl => {
        tbl.increments('id')
        
        tbl
            .string('submittedBy')
            .notNullable()
        tbl
            .string('severity')
            .notNullable()
        tbl
            .string('description')
            .notNullable()
        tbl
            .integer('assignedVendor').unsigned()
            .references("id").inTable("VENDORS")
            .onUpdate("cascade").onDelete("cascade")
        tbl
            .timestamps(true, true)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('MAINTENANCE_req')
};
