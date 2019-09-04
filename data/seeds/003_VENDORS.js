exports.seed = function(knex) {
    return knex('VENDORS').insert([
        {
            name: 'Home Depot',
            phone: '1112223333',
            email: 'homeDepot@gmail.com',
            addressInteger: 999,
            street: 'HomeDepotStreet',
            city: 'HomeDepotCity',
            state: 'HomeDepotState'
        },
        {
            name: 'Lowes',
            phone: '1112223333',
            email: 'lowes@gmail.com',
            addressInteger: 999,
            street: 'LowesStreet',
            city: 'LowesCity',
            state: 'LowesState'
        }
    ]);
}