const fs = require('fs'),
    path = require('path'),
    Koa = require('koa'),
    Router = require('koa-router'),
    app = module.exports = new Koa(),
    router = new Router();

const handlers = fs.readdirSync(path.join(__dirname, 'handlers')).sort();
handlers.forEach(handler => require('./handlers/' + handler).init(app));

router.get("/", async (ctx) => {
    ctx.body = `
<html>
    <head>
        <title>Smart Homer</title>
    </head>
    <body>
        <h1>Bad Motherfucker</h1>
    </body>
</html>
`;
});

router.get("/main", async ctx => {
   ctx.body = `Hey this is the main page`;
});

app.use(router.routes());
app.listen(4001);