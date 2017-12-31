const serve = require('koa-static'),
convert = require('koa-convert');

exports.init = app => app.use(convert(serve('public')));
