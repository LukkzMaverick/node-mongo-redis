const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const mongoose = require('mongoose')

const mongoURI = 'mongodb://localhost:27017/cache'
mongoose.connect(mongoURI, {useNewUrlParser:true, useUnifiedTopology: true})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

require("./routes")(app)

app.get('/', (req, res) => {
    res.send("<h1>oi</h1>")
})

app.listen(port, () => console.log(`listen is ${port}`))
