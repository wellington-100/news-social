


// Main app Module

// {------ Module Object Wrapper--------
let name = "Custom App"
let version = "1.0.0"
// ------ Module Object Wrapper--------}


import {name as authorName, email} from './author.mjs'
import { Card } from './Card.mjs'

let card = new Card(
    `${name} (${version})`,
    `${authorName}: ${email}`,
    '#112233'
)

let infoDiv = document.querySelector('#info')
card.render(infoDiv)


// console.log('App: ', name)
// console.log('Version: ', version)
// console.log('Author: ', authorName)
// console.log('email: ', email)
