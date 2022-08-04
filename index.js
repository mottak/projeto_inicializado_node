const express = require('express')

const app = express()
require('dotenv').config()

const port = process.env.PORT

app.use(express.json())

app.get('/ping', (req, res) => {
  res.send('Pong')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})