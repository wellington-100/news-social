// user imputs 3 rating values
// the script calculates the avg rating
// outputs the avg

import readline from 'node:readline'
import save from './storage.mjs'

let io = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

io.question('enter the values separated by space: ', answer => {
    let rating = answer.split(' ').map(value => parseFloat(value))

    let avgValue = rating.reduce((total, value) => total + value, 0) / rating.length

    let avgRating = avgValue.toFixed(1)

    let jsonRating = [
        { average: `${avgRating}`}
    ]
    
    save(jsonRating)
    
    io.close()
})

//HW5*: in a separate branch make an app using the json storage(save in file)
//HW6*: in a separate branch make an app using the json storage(load from file)