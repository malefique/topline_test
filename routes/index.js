const Router = require('koa-router'),
      controllers = require('../controllers');

const router = new Router();

router.get('/', controllers.books.get);
router.post('/add', controllers.books.add);
router.put('/edit', controllers.books.edit);

module.exports = router;
