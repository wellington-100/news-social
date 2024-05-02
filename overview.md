


let news
    |                 create a Promise <pending>
    v                 /
    +-- call --> getAllNews('./news.txt')-----+                   create a new Promise <pending>
    |                |                        |                  /
    |                +-------- call ----------------------> readFile('./data/news.json')--+
    |                |                        |                 |                         |
    |                |                        |                 +-- open './news.json'    |
    |                |                        |                 |                         |
    |                |                        |                 +-- read ...              |
    |                |                        |                 |                         |
    |                |                        |                 +-- resolve (content)     |
    |                |                        |                                           v
    |                |                        |                                     news(String data)
    |                |                        |                                           |
    |                + <-----------------------------return Promise <fulfilled> ----------+
    |                |                        |
    |                +---  JSON.parse(news)   |
    |                |                        |
    |                +---   .map(json block data) --> class News --+
    |                |                        |                    |
    |                |                        |                    + title
    |                |                        |                    + publishedOn
    |                |                        |                    + rating
    |                |                        |                    + author --> class User
    |                |                        |                    |                    |
    |                + <-------------------------------------------+                    + name     
    |                |                        |                                         + email
    |                + --- resolve(content)   |                                         + password
    |                                         v
    |                                   news(wrapped in a promise)
    |                                         |
    + <------- return Promise <fulfilled> ----+    
    |
    v                                         
result by await                                           
    

