module.exports = function (playerAction) {
    const random = Math.random() * 3
    let computerAction = null
    console.log(`你出了${playerAction}`)
    if (random < 1) {
        computerAction = 'rock' //石头
    } else if (random > 2) {
        computerAction = 'scissor' //剪刀
    } else {
        computerAction = 'paper' //布
    }
    console.log(`我出${computerAction}`)
    if (computerAction === playerAction) {
        console.log('平局，再决高下')
        return 0
    } else if (
        computerAction === 'rock' && playerAction === 'paper' ||
        computerAction === 'scissor' && playerAction === 'rock' ||
        computerAction === 'paper' && playerAction === 'scissor') {
        console.log('你赢了，好厉害！！')
        return 1
    } else {
        console.log('你输了，不要灰心！！')
        return -1
    }
}