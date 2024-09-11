const express = require('express')
const app = express()
const ui = require('./ui')

app.get('/', (req, res) => {
  res.send('Api is running')
})

app.get('/ui', (req, res) => {
  res.json(ui)
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running')
})

module.exports = app;