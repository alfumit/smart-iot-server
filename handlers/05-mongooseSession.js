const config = require('config');
const session = require('koa-session');
const mongooseStore = require('koa-session-mongoose');

const sessionStore = mongooseStore.create({
  model: 'Session',
  expires: 3600*24,
});

const CONFIG = {
  key: config.secret,
  maxAge: 86400000,
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  renew: false,
  store: sessionStore,
};


exports.init = (app) => app.use(session(CONFIG, app));
