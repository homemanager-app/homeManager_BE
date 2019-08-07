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
                    userType: 'test',
                    adminCat: 0,
                },
                {
                    firstName: "A",
                    lastName: "Turgeon",
                    userName: "Aturgeon",
                    pw: "OwnerSeed",
                    email: 'Aturgeon@testEmail.com',
                    phone: 1111111111,
                    userType: 'Property_Owner',
                    adminCat: 1,
                },
                {
                    firstName: "R",
                    lastName: "Turgeon",
                    userName: "Rturgeon",
                    pw: "LandlordSeed",
                    email: 'Rturgeon@testEmail.com',
                    phone: 2222222222,
                    userType: 'Landlord',
                    adminCat: 2,
                },
                {
                    firstName: "C",
                    lastName: "Turgeon",
                    userName: "Cturgeon",
                    pw: "MaintenanceSeed",
                    email: 'Cturgeon@testEmail.com',
                    phone: 3333333333,
                    userType: 'Third_Party_Maintenance',
                    adminCat: 3,
                },
                {
                    firstName: "M",
                    lastName: "Turgeon",
                    userName: "Mturgeon",
                    email: 'Mturgeon@testEmail.com',
                    phone: 4444444444,
                    pw: "TenantSeed",
                    userType: 'Tenant',
                    adminCat: 4,
                }
            ]);
        });
};