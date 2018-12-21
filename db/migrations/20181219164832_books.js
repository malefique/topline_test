
exports.up = function(knex, Promise) {
    return knex.schema.createTable('books', (table) => {
        table.increments();
        table.string('title');
        table.string('author');
        table.string('description');
        table.string('image');
        table.timestamps();

        table.index('created_at','cdIndex');
        table.index('updated_at','udIndex');

        table.charset('utf8');
        table.engine('InnoDB');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('books');
};
