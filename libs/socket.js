let config = require('config');
let mongoose = require('mongoose');
let socketIO = require('socket.io');
let socketRedis = require('socket.io-redis');
// let User = require('models/user');

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/test');
console.log(mongoose);
/**
 * A module containing all socket.io functionality
 * @param {object} server - koa server application
 */
function socketApp(server) {
  let count = 0;
  let users = [];
  let usersTyping = [];
  let io = socketIO(server);
  io.adapter(socketRedis({host: 'localhost', port: 6379}));
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
}

let socketEmitter = require('socket.io-emitter');
let redisClient = require('redis').createClient(/* {localhost, 6379}*/);
socketApp.emitter = socketEmitter(redisClient);

module.exports = socketApp;
