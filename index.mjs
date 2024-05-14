// user imputs 3 rating values
// the script calculates the avg rating
// outputs the avg

import readline from 'node:readline'

let io = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

io.question('enter 3 rating values separated by space: ', answer => {
    let rating = answer.split(' ').map(value => parseFloat(value))

    // HW2: calculate this, using standard for()
    // HW3: calculate this, using Array.reduce()
    let avgValue = (rating[0] + rating[1] + rating[2]) / 3

    // HW1: only 1 digit...
    let avgRating = avgValue.toFixed(1)

    console.log('the average rating is: ', avgRating)
    io.close()
})