//to run the following code in the terminal, type 'node index.js'
//console.log('Hello, world')

//to open up REPL in the terminal, type 'node'. (ctrl + c twice to exit)

//internal node.js module
const fs = require('fs')
//external node.js module
const superheroes = require('superheroes')
const supervillains = require('supervillains') 


//create a copy of file1 to file2. To run in terminal, type 'node index.js'
//'file1.txt' is the source text and 'file2.txt' is the destination text
//fs.copyFileSync('file1.txt', 'file2.txt')

let mySuperheroName = superheroes.random()
console.log('superhero name: ', mySuperheroName)

let mySupervillainName = supervillains.random()
console.log('supervillain name: ', mySupervillainName)
