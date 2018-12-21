const { ValidationError } = require('../middleware/errors'),
      config = require('../config');

module.exports = {
    async get(ctx) {

        let { limit, offset, sort, sort_order, group} = ctx.query;

        limit = parseInt(limit, 10) || config.paging.limit;
        offset = parseInt(offset, 10) || 0;
        let query = ctx.app.db('books').select('*');
        if(sort && sort_order){
            if(config.sort.availableFields.indexOf(sort) === -1 && config.sort.availableOrders.indexOf(sort_order) === -1){
                sort = config.sort.default.sort;
                sort_order = config.sort.default.sort_order;
            }
            query = query.orderBy(sort,sort_order);
        }

        if(group){
            if(config.group.availableFields.indexOf(group) === -1){
                group = config.group.default.group;
            }
            query = ctx.app.db('books').groupBy(group);
        }

        let books = await query.limit(limit).offset(offset);
        ctx.body = {
            results: books
        };
    },

    async add(ctx){
        let { body = {} } = ctx.request;

        book = await ctx.app.schemas.book.validate(body, { abortEarly: false }).catch((err) => {
            ctx.throw(422, new ValidationError(err.message));
        });

        book.created_at = new Date().toISOString();
        book.updated_at = new Date().toISOString();
        await ctx.app.db('books').insert(book);

        ctx.body = {
            results: 'Added new book'
        }
    },

    async edit(ctx){
        let { body = {} } = ctx.request;

        book = await ctx.app.schemas.book.validate(body, { abortEarly: false }).catch((err) => {
            ctx.throw(422, new ValidationError(err.message));
        });

        book.updated_at = new Date().toISOString();
        await ctx.app.db('books').update(book).where({ id: book.id});

        ctx.body = {
            results: 'Book updated'
        }
    }
};