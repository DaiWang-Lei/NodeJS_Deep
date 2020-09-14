// const chalk = require('chalk')
// console.log(chalk.red('哇，厉害啊'));

// const ProgressBar = require('progress')
// const bar = new ProgressBar(':bar', { total: 10 })
// const timer = setInterval(() => {
//     bar.tick()
//     if (bar.complete) {
//         console.log(chalk.blueBright('哇o'));
//         clearInterval(timer)
//     }
// }, 100)
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`你叫什么名字?`, name => {
    console.log(`你好 ${name}!`)
    readline.close()
  })