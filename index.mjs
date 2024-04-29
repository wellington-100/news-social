

// import {readFile} from 'node:fs'  // callback
import {readFile} from 'node:fs/promises'  // promises

// readFile('./news.txt', (err, data) => {
//     console.log(data.toString())
// })

let data = await readFile('./news.txt')
console.log(data.toString())