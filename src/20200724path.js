// const path = require('path')
// const notes = '/users/joe/notes.txt'
// console.log(path.basename(notes,path.extname(notes)));
// console.log(path.dirname(notes));
// console.log(path.extname(notes));
// console.log(path.resolve('joe.txt'));

// const name = 'joe'
// const test = require('path').join('/',name,'test.txt')
// console.log(test);

const test1 = require('path').parse('/users/test.txt')
console.log(test1);
const newPath = require('path').join(test1.dir,test1.name,'test1.gif')
console.log(newPath);