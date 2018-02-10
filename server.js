const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const	mongoose = require('mongoose');
const app = module.exports = new Koa();
const router = new Router();

const handlers = fs.readdirSync(path.join(__dirname, 'handlers')).sort();
handlers.forEach((handler) => require('./handlers/' + handler).init(app));

const Hub = require('node-xiaomi-smart-home').Hub;
const hub = new Hub();

// router.get('/', require('./routes/homepage').get);
router.get('/main', async (ctx) => {
   ctx.body = `Hey this is the main page `;
});

app.use(router.routes());
const server = app.listen(4001);
let count = 0;
let users = [];
let usersTyping = [];
let socketIO = require('socket.io');
let io = socketIO(server);

io.on('connection', (socket) => {
  count++;
  socket.on('new user', (msg) => {
    users.push(msg);
    io.emit('user registered', msg);
  });

  console.log(count + 'user connected');

  socket.on('disconnect', () => {
    io.emit('user disconnected');
  });

  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
    console.log('message: ' + msg);
  });

  socket.on('user typing', (msg) => {
    if (usersTyping.indexOf(msg.user) === -1) usersTyping.push(msg.user);
    setTimeout(() => {
      if (usersTyping.indexOf(msg.user) !== -1) {
          usersTyping.splice(usersTyping.indexOf(msg.user), 1);
        }
      }, 5000);
    io.emit('user typing notification', usersTyping);
  });
});

hub.listen();

hub.on('message', function(message) {
	console.log(message);
});

hub.on('data.motion', function(sid, motion) {
	console.info('motion', sid, motion);
});
