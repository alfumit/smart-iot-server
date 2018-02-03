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

// router.get('/', require('./routes/homepage').get);
router.get('/main', async ctx => {
   ctx.body = `Hey this is the main page ${JSON.stringify(motionData)}`;
});

app.use(router.routes());
const server = app.listen(4001);
let count = 0, users = [];
let socketIO = require('socket.io'),
	io = socketIO(server);
	 io.on('connection', (socket) => {
	    count++;
	    socket.on('new user', (msg) => {
	    	users.push(msg);
		    io.emit('user registered', msg);
	    });

		 console.log(count + 'user connected');

		 socket.on('disconnect', () => {
		    io.emit("user disconnected");
		 });

		 socket.on('chat message', function(msg){
		 	io.emit('chat message', msg);
			 console.log('message: ' + msg);
		 });


	 });

hub.listen();

hub.on('message', function (message) {
	console.log(message);
});

hub.on('data.motion', function (sid, motion) {
	console.info('motion', sid, motion);
});