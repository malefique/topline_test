const faker = require('faker'),
      config = require('../../config');
faker.locale = 'ru';

function books(len){
    return Array.from({ length: len }, () => {
        let date = faker.date.past().toISOString();
        return {
            title: faker.random.words(3),
            author: faker.name.firstName() + ' ' + faker.name.lastName(),
            description: faker.lorem.sentences(1),
            image: faker.image.imageUrl(),
            created_at: date,
            updated_at: date
        };
    });
}

exports.seed = async function(knex, Promise) {
    await knex('books').del();
    return Promise.all(books(100000).map(book => {
        return knex('books').insert(book)
    }));
};
