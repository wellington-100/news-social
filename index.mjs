// user imputs 3 rating values
// the script calculates the avg rating
// outputs the avg

import readline from 'node:readline'

let io = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

io.question('enter the values separated by space: ', answer => {
    let rating = answer.split(' ').map(value => parseFloat(value))

    // HW2: calculate this, using standard for()
    // HW3: calculate this, using Array.reduce()
    // HW4: make the calculator flexible(many/more values..)
    let values = 0
    for (let i = 0; i < rating.length; i++){
        values += rating[1]
    }
    let avgValue = values / rating.length

    // HW1: only 1 digit...
    let avgRating = avgValue.toFixed(1)

    console.log('the average rating is: ', avgRating)
    io.close()
})

//HW5*: in a separate branch make an app using the json storage(save in file)
//HW6*: in a separate branch make an app using the json storage(load from file)