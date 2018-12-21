const Koa = require('koa'),
      helmet = require('koa-helmet'),
      bodyParser = require('koa-bodyparser'),
      config = require('./config'),
      knex = require('knex'),
      routes = require('./routes'),
      logger = require('koa-logger');

const app = new Koa();

require('./schemas')(app);

app.db = knex(config.db);

app.use(logger());
app.use(helmet.hidePoweredBy());
app.use(bodyParser(config.bodyParser));

app.use(routes.routes());
app.use(routes.allowedMethods());

app.use((ctx) => ctx.throw(400));

const port = process.env.PORT || 3000;

const server = app.listen(port, () => console.log('Server\'s listening on port ' + server.address().port));