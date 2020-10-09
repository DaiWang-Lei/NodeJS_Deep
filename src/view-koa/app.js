const Koa = require('koa');

const router = require('koa-router')()
const app = new Koa();
const bodyParser = require('koa-bodyparser');
app.use(bodyParser())
let staticFiles = require('./static-files');
app.use(staticFiles('/static/', __dirname + '/static'));

const isProduction = process.env.NODE_ENV === 'production';
app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));
if (! isProduction) {
    let staticFiles = require('./static-files');
    app.use(staticFiles('/static/', __dirname + '/static'));
}

const controller = require('./controller')
app.use(controller());

// add router middleware
app.use(router.routes())
app.listen(3000)
console.log('app started at port 3000');
