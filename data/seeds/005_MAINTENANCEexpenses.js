exports.seed = function(knex) {
    return knex('MAINTENANCE_exp').insert([
        {
            requestID: 1,
            vendorID: 1,
            quantity: 3,
            itemName: 'nails',
            price: 5.50
        },
        {
            requestID: 1,
            vendorID: 2,
            quantity: 2,
            itemName: 'masks',
            price: 3.00
        }
    ]);
}