const favicon = require('koa-favicon');
const path = require('path');

exports.init = (app) => {
    let imagePath = path.join(`${__dirname}/../public/favicon.ico`);
    return app.use(favicon(imagePath));
};
