exports.seed = function(knex) {
// Deletes ALL existing entries
    return knex('users').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('users').insert([
                {
                    firstName: "test",
                    lastName: "test",
                    userName: "test",
                    pw: "test",
                    email: 'test@testemail.com',
                    phone: 0000000000,
                    userType: 'testSeed',
                    adminCat: 0,
                },
                {
                    firstName: "testPropertyOwner",
                    lastName: "testPropertyOwner",
                    userName: "testPropertyOwner",
                    pw: "testPropertyOwner",
                    email: 'testPropertyOwner@gmail.com',
                    phone: 1,
                    userType: 'testSeed',
                    adminCat: 1,
                },
                {
                    firstName: "testLandLord",
                    lastName: "testLandLord",
                    userName: "testLandLord",
                    pw: "testLandLord",
                    email: 'testLandLord@gmail.co',
                    phone: 2,
                    userType: 'testSeed',
                    adminCat: 2,
                },
                {
                    firstName: "testMaintenanceUser",
                    lastName: "testMaintenanceUser",
                    userName: "testMaintenanceUser",
                    pw: "testMaintenanceUser",
                    email: 'testMaintenanceUser@gmail.co',
                    phone: 3,
                    userType: 'testSeed',
                    adminCat: 3,
                },
                {
                    firstName: "testTenant",
                    lastName: "testTenant",
                    userName: "testTenant",
                    email: 'testTenant@gmail.com',
                    phone: 4,
                    pw: "testTenant",
                    userType: 'testSeed',
                    adminCat: 4,
                }
            ]);
        });
};