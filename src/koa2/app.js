const Koa = require('koa');

const router = require('koa-router')()
const app = new Koa();
const bodyParser = require('koa-bodyparser');
app.use(bodyParser())

const controller = require('./controller')

app.use(controller());

// add router middleware
app.use(router.routes())
app.listen(3000)
console.log('app started at port 3000');
