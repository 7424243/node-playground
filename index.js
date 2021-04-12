//to run the following code in the terminal, type 'node index.js'
//console.log('Hello, world')

//to open up REPL in the terminal, type 'node'. (ctrl + c twice to exit)

const fs = require('fs')

//create a copy of file1 to file2. To run in terminal, type 'node index.js'
//'file1.txt' is the source text and 'file2.txt' is the destination text
fs.copyFileSync('file1.txt', 'file2.txt')
