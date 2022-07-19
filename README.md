
# NewsApp-React 

Newspaper is one of the most popular and required
assets of our daily lives. And, in today’s hectic 
world, reading newspaper has become one of the traditionalways
of reading the news. With the news being created every
minute and relayed through TV, radio and internet, the
updated news is already old by the next morning. And,
that’s why you can use my news app to read the latest developments
in various fields of Tech,Science,Entertainment etc.
## API Reference

#### Get all items

```http
GET https://newsapi.org/v2/everything?q=enter_query&apiKey=API_KEY
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


## Demo
<img src="public/ezgif.com-gif-maker.gif" alt="Demo" height="400px" width="500px">

## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
