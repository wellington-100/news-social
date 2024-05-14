// user imputs 3 rating values
// the script calculates the avg rating
// outputs the avg

import load from './storage.mjs'


let jsonRating = await load()

let rating = jsonRating.split(' ').map(value => parseFloat(value))

let avgValue = rating.reduce((total, value) => total + value, 0) / rating.length

let avgRating = avgValue.toFixed(1)

console.log("the average rating is: ", avgRating)
    
//HW5*: in a separate branch make an app using the json storage(save in file)
//HW6*: in a separate branch make an app using the json storage(load from file)