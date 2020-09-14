// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//   const stream = fs.createReadStream(__dirname + '/data.txt')
//   stream.pipe(res)
// })
// server.listen(3000)


const Stream = require('stream')
const readableStream = new Stream.Readable({
    read() { }
})
readableStream.push('hi!')
readableStream.push('ho!')