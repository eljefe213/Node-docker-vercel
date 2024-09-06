const express = require('express')
const app = express()
const { greet, bye } = require('../service/greetings')

app.get('/hello/:name?', (req, res) => {
  const name = req.params.name || '!'
  res.send(greet(name))
})

app.get('/goodbye/:name?', (req, res) => {
  const name = req.params.name || '!'
  res.send(bye(name))
})

module.exports = app
