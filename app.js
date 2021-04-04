const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 5000

// Static Files
app.use(express.static('public'))

// Templating Engine
app.set('views', './src/views')
app.set('view engine', 'ejs')



// Routes
const indexRouter = require('./src/routes/index')
const moreRouter = require('./src/routes/more')

app.use('/', indexRouter)
app.use('/more', moreRouter)


// Listen on port 5000
app.listen(port, () => console.log(`Listening on port ${port}`))