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
                    userType: 'test',
                    adminCat: 0,
                },
                {
                    firstName: "A",
                    lastName: "Turgeon",
                    userName: "Aturgeon",
                    pw: "OwnerSeed",
                    userType: 'Property_Owner',
                    adminCat: 1,
                },
                {
                    firstName: "R",
                    lastName: "Turgeon",
                    userName: "Rturgeon",
                    pw: "LandlordSeed",
                    userType: 'Landlord',
                    adminCat: 2,
                },
                {
                    firstName: "C",
                    lastName: "Turgeon",
                    userName: "Cturgeon",
                    pw: "MaintenanceSeed",
                    userType: 'Third_Party_Maintenance',
                    adminCat: 3,
                },
                {
                    firstName: "M",
                    lastName: "Turgeon",
                    userName: "Mturgeon",
                    pw: "TenantSeed",
                    userType: 'Tenant',
                    adminCat: 4,
                }
            ]);
        });
};