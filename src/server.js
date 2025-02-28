const express = require('express')

const app = express()

const port = 8017
const host = 'localhost'

app.get('/', function (req, res) {
    res.send('<h1>Hello world</h1>')
})

app.listen(port, host, () => {
  console.log(`Server running at: http://${host}:${port}`);
})