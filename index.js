




const news = [
    {
        title: "News One", 
        publishedOn: "2024-04-24",
        author: "Peter Parker",
        rating: 5
    }, 
    {
        title: "News Two", 
        publishedOn: "2024-04-23",
        author: "Tony Stark",
        rating: 4.5
    }, 
    {
        title: "News Three", 
        publishedOn: "2024-04-22",
        author: "Marry Jane",
        rating: 1
    }, 

]

const ratingMap = [
    `☆☆☆☆☆`,
    `★☆☆☆☆`,
    `★★☆☆☆`,
    `★★★☆☆`,
    `★★★★☆`,
    `★★★★★`
]

console.clear()
console.log("NEWS\n")
//HW1: format rating ---> 5.0

// TODO: change to forEach()
for(let i=0; i<news.length; i++){
    // let stars
    let rating = Math.round(news[i].rating)
    // HW2: switch/case

    // if (rating == 5) {
    //     stars = `★★★★★`
    // } else if (rating == 4) {
    //     stars = `★★★★☆`
    // } else if (rating == 3) {
    //     stars = `★★★☆☆`
    // } else if (rating == 2) {
    //     stars = `★★☆☆☆`
    // } else if (rating == 1) {
    //     stars = `★☆☆☆☆`
    // } else if (rating == 0) {
    //     stars = `☆☆☆☆☆`
    // }

    let template = ` ${news[i].title} (${ratingMap[rating]})\n` +
                   `\t- ${news[i].publishedOn} <${news[i].author}>\n`
    console.log(template)
    
}

// ★ ☆
