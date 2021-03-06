
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username: 'test1', password: '$2a$14$dz4Noj0i5/4pAERh72UTdu8ShXCSOgkqyN1i3i2/URygUBklMWwry', phoneNumber: '867-5309' },
        { id: 2, username: 'test2', password: '$2a$14$dz4Noj0i5/4pAERh72UTdu8ShXCSOgkqyN1i3i2/URygUBklMWwry', phoneNumber: '123-4567' },
        { id: 3, username: 'test3', password: '$2a$14$dz4Noj0i5/4pAERh72UTdu8ShXCSOgkqyN1i3i2/URygUBklMWwry', phoneNumber: '555-6969' },
      ])
    })
}
