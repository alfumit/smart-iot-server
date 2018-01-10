const fs = require('fs'),
    path = require('path'),
    Koa = require('koa'),
    Router = require('koa-router'),
    app = module.exports = new Koa(),
    router = new Router();

const handlers = fs.readdirSync(path.join(__dirname, 'handlers')).sort();
handlers.forEach(handler => require('./handlers/' + handler).init(app));

let Hub = require("node-xiaomi-smart-home").Hub,
    hub = new Hub();

router.get('/', require('./routes/homepage').get);
router.get('/main', async ctx => {
   ctx.body = `Hey this is the main page ${JSON.stringify(motionData)}`;
});

app.use(router.routes());
const server = app.listen(4001);
let socketIO = require('socket.io'),
	io = socketIO(server);
 io.on('connection', (socket) => {
     console.log('a user connected');

	 io.emit('message', `test connected.`);

 });

hub.listen();

hub.on('message', function (message) {
	console.log(message);
});

hub.on('data.motion', function (sid, motion) {
	console.info('motion', sid, motion);
});