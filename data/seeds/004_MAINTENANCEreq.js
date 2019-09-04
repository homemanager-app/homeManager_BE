exports.seed = function(knex) {
    return knex('MAINTENANCE_req').insert([
        {
            locationID: 1,
            submittedBy: 2,
            severity: 'low',
            description: 'This is a test of the seeding!',
            assignedTo: 1
        }
    ]);
}