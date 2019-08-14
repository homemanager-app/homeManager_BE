exports.seed = function(knex) {
    // Deletes ALL existing entries
        return knex('locations').truncate()
            .then(function () {
                // Inserts seed entries
                return knex('locations').insert([
                    {
                        Street_Number: 15,
                        Street_Name: "Martha's Way",
                        City: 'Franklin',
                        State: 'MA',
                        Zip_Code: '02038',
                        adminID: 1
                    }
                ]);
            });
    };