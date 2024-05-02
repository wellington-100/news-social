
import renderNews from './ui.mjs'
import getAllNews from './storage.mjs'

let news = await getAllNews()

renderNews(news)