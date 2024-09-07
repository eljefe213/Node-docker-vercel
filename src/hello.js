const express = require('express')
const app = express()
const { greet, bye } = require('../service/greetings')

// Route pour la racine
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!')
})

// Route pour /hello
app.get('/hello/:name?', (req, res) => {
  const name = req.params.name || '!'
  res.send(greet(name))
})

// Route pour /goodbye
app.get('/goodbye/:name?', (req, res) => {
  const name = req.params.name || '!'
  res.send(bye(name))
})

module.exports = app
