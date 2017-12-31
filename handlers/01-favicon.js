const favicon = require('koa-favicon'),
    path = require('path');

exports.init = app => {
    let imagePath = path.join(`${__dirname}/../public/favicon.ico`);
    return app.use(favicon(imagePath));
};