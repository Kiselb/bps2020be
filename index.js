const express = require('express')
const path = require('path')
const middleware = require('./middleware/index')

const app = express()

app.use(express.static(path.join(__dirname + '/')))
app.use(express.json())

middleware.connect(app)

app.listen(3000)
console.log('Running on Port: 3000')
