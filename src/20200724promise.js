// let done = null
// const isItDoneYet = new Promise((res,rej)=>{
//     if(done){
//         const workDone = '这是创建的东西'
//         res(workDone)
//     }else{
//         const why = '仍然在处理其他事情'
//         rej(why)
//     }
// })
// const checkifItsDone = ()=>{
//     isItDoneYet
//     .then(ok => console.log(ok))
//     .catch(err => console.log(err))
// }
// console.log(checkifItsDone());

// const first = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'first')
//   })
//   const second = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'second')
//   })
  
//   Promise.race([first, second]).then(result => {
//     console.log(result) // second
//   })


// const doSomethingAsync = () => {
//     return new Promise(resolve => {
//       setTimeout(() => resolve('I did something'), 3000)
//     })
//   }
  
//   const doSomething = async () => {
//     console.log(await doSomethingAsync())
//   }
  
//   console.log('Before')
//   doSomething()
//   console.log('After')

// const test = async()=>{
//     return 'test'
// }
// console.log(test());

const EventEmitter = require('events')
const eventEmitter = new EventEmitter()
eventEmitter.on('start',(num,num2)=>{console.log(`started ${num}to${num2}`)})
eventEmitter.emit('start',99,90)