

import News from './News.mjs'
import User from './User.mjs'
const news = [
    new News("News One", "2024-04-24", new User("Peter Parker", "peter@email.com", "123"), 5), 
    new News("News Two", "2024-04-23", new User("Tony Stark", "tonny@email.com", "456"), 4.5), 
    new News("News Three", "2024-04-22", new User("Marry Jane", "marry@email.com", "789"), 1), 
]

export default news