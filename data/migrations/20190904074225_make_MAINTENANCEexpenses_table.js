
exports.up = function(knex) {
    return knex.schema.createTable('MAINTENANCE_exp', tbl => {
        tbl.increments('id')
        
        tbl
            .integer('requestID')
            .references("id").inTable("MAINTENANCE_req")
            .onUpdate("cascade").onDelete("cascade");

        tbl
            .integer('vendorID').unsigned()
            .references("id").inTable("VENDORS")
            .onUpdate("cascade").onDelete("cascade");

        tbl
            .string('quantity')
            .notNullable()

        tbl
            .string('itemName')
            .notNullable()

        tbl
            .float('price')
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('MAINTENANCE_exp')
};
