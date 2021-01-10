const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
const game = require('./game')


let playerWon = 0;
let playerLastAction = null //记录上一次操纵
let sameCount = 0
http.createServer(function (req, res) {

    // const { pathname, query } = url.parse(req.url)
    const parsedUrl = url.parse(req.url)
    // console.log(parsedUrl)
    if (parsedUrl.pathname == '/favicon.ico') {
        res.writeHead(200);
        res.end();
        return;
    }

    if (parsedUrl.pathname == '/game') {
        // console.lcls

        const query = querystring.parse(parsedUrl.query)
        const playerAction = query.action
        const gameResult = game(playerAction)

        // playerLastAction = playerAction
        if (playerLastAction && playerAction == playerLastAction) {
            sameCount++
        } else {
            sameCount = 0
        }

        if (sameCount >= 3) {
            res.writeHead(400);
            res.end('你总出一样的，真没意思，我不玩了！')
            sameCount = 9
            return
        }
        if (playerWon >= 3 || sameCount == 9) {
            res.writeHead(500);
            res.end('我不和你玩了！！')
            return
        }

        playerLastAction = playerAction
        res.writeHead(200);
        if (gameResult == 0) {
            res.end('平局，再来')
        } else if (gameResult == 1) {
            playerWon++
            res.end('恭喜你，你赢了！')
        } else {
            res.end('你输了哦！')

        }
    }
    if (parsedUrl.pathname == '/') {
        fs.createReadStream(__dirname + '/singn.html')
            .pipe(res)
    }
}).listen(3000)