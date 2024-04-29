
const ratingMap = [
    `☆☆☆☆☆`,
    `★☆☆☆☆`,
    `★★☆☆☆`,
    `★★★☆☆`,
    `★★★★☆`,
    `★★★★★`
]

const renderNews = (news) => {

    console.clear()
    console.log("NEWS\n")
    //HW1: format rating ---> 5.0

    // TODO: change to forEach()
    news.forEach(newsItem => {
        let rating = Math.round(newsItem.rating)

        let template = ` ${newsItem.title} (${ratingMap[rating]})\n` +
            `\t- ${newsItem.publishedOn} <${newsItem.author.name}>\n`
        console.log(template)
    });
    // ★ ☆
}

export default renderNews