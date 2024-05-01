

// import {readFile} from 'node:fs'  // callback
// import {readFile} from 'node:fs/promises'  // promises
import {writeFile} from 'node:fs/promises'

//////////////////////////////////////////
// readFile('./news.txt', (err, data) => {
//     console.log(data.toString())
// })

//////////////////////////////////////////
// readFile('./news.txt').then((data) => {
//     console.log(data.toString())
// })

// let data = await readFile('./news.json')

// data = JSON.parse(data)

// data.forEach(newsItem => {
//     console.log("---------------------------")
//     console.log(`${newsItem.title} <${newsItem.author}>`)

// })
//////////////////////////////////////////

// let title = "This is a simple test"

// await writeFile('./news.txt', title)
//////////////////////////////////////////

let news = [
    {title: "This is the First news"},
    {title: "This is the Second news"}
]

await writeFile('./news.json', JSON.stringify(news))