const serve = require('koa-static');
const convert = require('koa-convert');

exports.init = (app) => console.log('static switched off'); //app.use(convert(serve('public')));
