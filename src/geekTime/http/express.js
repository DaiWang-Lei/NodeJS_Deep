const fs = require('fs')
const url = require('url')
const game = require('./game')
const express = require('express')

// 玩家胜利次数，如果超过3，则后续往该服务器的请求都返回500
let playerWinCount = 0;
//记录上一次操纵
let playerLastAction = null
// 玩家连续出同一个动作的次数
let sameCount = 0


const app = new express()

app.get('/favicon.ico', function (req, res) {
    res.send(200)
    return;
})


app.get('/game',
    function (req, res, next) {
        // 此中间件只做判断是否继续玩下去
        if (playerWinCount >= 3 || sameCount == 9) {
            res.status(500);
            res.send('我不和你玩了！！')
            return
        }
        next()
        if(playerWon){
            playerWinCount++
        }
    },
    function (req, res, next) {
        // 此中间件判断用户是否总出一样的
        const query = req.query
        const playerAction = query.action

        if (playerLastAction && playerAction == playerLastAction) {
            sameCount++
        } else {
            sameCount = 0
        }

        if (sameCount >= 3) {
            res.status(400)
            res.send('太没意思了，总出一样的')
            sameCount = 9
            return
        }
        playerLastAction = playerAction
        res.playerLastAction = playerLastAction
        next()

    },
    function (req, res) {
        // 此中间件用来判断输赢
        const playerAction = res.playerAction
        const gameResult = game(playerAction)

        res.status(200);
        if (gameResult == 0) {
            res.send('平局，再来')
        } else if (gameResult == 1) {
            playerWon++

            res.send('恭喜你，你赢了！')
            res.playerWon = true
        } else {
            res.send('你输了哦！')

        }
    }
)

app.get('/', function (req, res) {
    res.send(fs.readFileSync(__dirname + '/singn.html', utf - 8))
})

app.listen(3000)

