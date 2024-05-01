/////////////////////////////////////////////////////////
## read with .then():

|                       create a Promise <pending>
v                       /
+----- call ------> readFile('./news.txt')-------+
|                       |                        |
|                       +-- open './news.txt'    |
|                       |                        |
|                       +-- read ...             |
|                       |                        |
|                       +-- resolve (content) ------+
v                                                |  |
+ <----------- return Promise <fulfilled> -------+  | 
|                                                   |
|              +------------------------------------+
v              v
+ .then ((data/content) => {console.log(data/content)})


/////////////////////////////////////////////////////////

## read with await

|                       create a Promise <pending>
v                       /
+----- call ------> readFile('./news.txt')-------+
|                       |                        |
|                       +-- open './news.txt'    |
|                       |                        |
|                       +-- read ...             |
|                       |                        |
|                       +-- resolve (content) ------+
v                                                |  |
+ <----------- return Promise <fulfilled> -------+  | 
|                                                   |
|          +----------------------------------------+
v          v
+ data = await
|
v
+ console.log(data.toString())


/////////////////////////////////////////////////////////

## write with await

|                       create a Promise <pending>
v                       /
+----- call ------> writeFile('./news.txt', data)-----+
|                       |                             |
|                       +-- open/create './news.txt'  |
|                       |                             |
|                       +-- write ...                 |
|                       |                             |
|                       +-- resolve (success) -----------+
v                                                     |  |
+ <----------- return Promise <fulfilled> ------------+  | 
|                                                        |
|          +---------------------------------------------+
v          v
+ result = await
|
v


/////////////////////////////////////////////////////////

## .json write with await

|                       create a Promise <pending>
v                       /
+----- call ------> writeFile('./news.json', JSON.stringify(news)-+
|                       |                                      v  |
|                       +-------- json data -------------------+  |
|                       |                                         |    
|                       +-- open/create './news.json'             |
|                       |                                         |
|                       +-- write ...                             |
|                       |                                         |
|                       +-- resolve (success) -----------------------+
v                                                                 |  |
+ <----------- return Promise <fulfilled> ------------------------+  | 
|                                                                    |
|          +---------------------------------------------------------+
v          v
+ result = await
|
v

