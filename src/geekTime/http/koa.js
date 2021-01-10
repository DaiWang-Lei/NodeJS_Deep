const fs = require('fs')
const url = require('url')
const game = require('./game')
const koa = require('koa')
const mount = require('koa-mount')
const { resolve } = require('path')

// 玩家胜利次数，如果超过3，则后续往该服务器的请求都返回500
let playerWinCount = 0;
//记录上一次操纵
let playerLastAction = null;
// 玩家连续出同一个动作的次数
let sameCount = 0


const app = new koa();

app.use(
    mount('/favicon.ico', function (ctx) {
        ctx.status = 200;
    })
)


const gameKoa = new koa();
gameKoa.use(
    async function (ctx, next) {
        // 此中间件只做判断是否继续玩下去
        if (playerWinCount >= 3 || sameCount == 9) {
            ctx.status = 500;
            ctx.body = '我不和你玩了！！';
            return;
        }
        await next();
        if (ctx.playerWon) {
            playerWinCount++
        }
    }
)

gameKoa.use(
    async function (ctx, next) {
        // 此中间件判断用户是否总出一样的
        const query = ctx.query
        const playerAction = query.action

        // if (!playerLastAction) {
        //     ctx.status = 400;
        //     return;
        // }
        if (sameCount == 9) {
            ctx.status = 500;
            ctx.body = '我不玩了';
        }
        if (playerLastAction && playerAction == playerLastAction) {
            sameCount++;
            if (sameCount >= 3) {
                ctx.status = 400;
                ctx.body = '太没意思了，总出一样的';
                sameCount = 9
                return;
            }
        } else {
            sameCount = 0
        }

      
        playerLastAction = playerAction
        ctx.playerAction = playerAction
        await next();
    }
)

gameKoa.use(
    async function (ctx, next) {
        // 此中间件用来判断输赢
        const playerAction = ctx.playerAction;
        const gameResult = game(playerAction)
        await new Promise(resolve => {
            setTimeout(() => {
                ctx.status = 200;
                if (gameResult == 0) {
                    ctx.body = '平局，再来';
                } else if (gameResult == 1) {
                    // playerWon++
                    ctx.body = '恭喜你，你赢了！';
                    ctx.playerWon = true
                } else {
                    ctx.body = '你输了哦！';
                }
                resolve()
            }, 500);

        })

    }
)
app.use(
    mount('/game', gameKoa)
)

app.use(
    mount('/', function (ctx) {
        ctx.body = fs.readFileSync(__dirname + '/singn.html', 'utf-8');
    })
)


app.listen(3000)

