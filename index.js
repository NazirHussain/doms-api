const express = require('express')
const app = express()
const posts = require('./posts.json')

app.get('/posts', (req, res) => {
    // res.send('Posts endpoint')
   res.send(posts)
})

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})