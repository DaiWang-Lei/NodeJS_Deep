// 石头、剪刀、布游戏
const playerAction = process.argv[process.argv.length - 1]
const random = Math.random() * 3
let computerAction = null
if (random < 1) {
    computerAction = 'rock' //石头
} else if (random > 2) {
    computerAction = 'scissor' //剪刀
} else {
    computerAction = 'paper' //布
}

if (computerAction === playerAction) {
    console.log('平局，再决高下')
} else if (
    computerAction === 'rock' && playerAction === 'paper' ||
    computerAction === 'scissor' && playerAction === 'rock' ||
    computerAction === 'paper' && playerAction === 'scissor') {
    console.log('你赢了，好厉害！！')
} else {
    console.log('你输了，不要灰心！！')
}