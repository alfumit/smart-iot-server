const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const	mongoose = require('mongoose');
const app = module.exports = new Koa();
const router = new Router();
const socketApp = require('./libs/socket');

const handlers = fs.readdirSync(path.join(__dirname, 'handlers')).sort();
handlers.forEach((handler) => require('./handlers/' + handler).init(app));

// router.get('/', require('./routes/homepage').get);
router.get('/main', async (ctx) => {
   ctx.body = `Hey this is the main page `;
});

app.use(router.routes());
const server = app.listen(4001);
socketApp(server);
