const Koa=require('koa');

const router = require('koa-router')()
const app=new Koa();
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.}`);
});

app.listen(3000);