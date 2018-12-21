const knex = require('./knexfile');

const config = {
    db: knex.development,
    bodyParser: {
        enableTypes: ['json']
    },
    paging: {
        limit: 10
    },
    sort: {
        availableFields: ['author', 'title', 'description', 'image','created_at','updated_at'],
        availableOrders: ['ASC', 'DESC'],
        default: {
            sort: 'created_at',
            sort_order: 'ASC'
        }
    },
    group: {
        availableFields: ['author', 'title', 'description', 'image', 'created_at', 'updated_at'],
        default: {
            group: 'created_at'
        }
    }
};

module.exports = config;