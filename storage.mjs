import {readFile} from 'node:fs/promises'
import News from './News.mjs'
import User from './User.mjs'

const getAllNews = async () => {
    //1. read file content as String
    let news = await readFile('./data/news.json')

    //2. decode a simple Array + Objects
    news = JSON.parse(news)

    //3. map the data to News/User class objects
    news = news.map(item => {
        return new News (
            item.title,
            item.publishedOn,
            item.rating,
            new User (
                item.author.name,
                item.author.email,
                item.author.password,
            )
        )
    })
    return news // wrapped in a promise
}

export default getAllNews