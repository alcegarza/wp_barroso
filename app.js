const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 5000

// Static Files
app.use(express.static('public'))


// Templating Engine
app.set('views', './src/views')
app.set('view engine', 'ejs')



// Routes
const indexRouter = require('./src/routes/index')
const legalRouter = require('./src/routes/legal')

app.use('/', indexRouter)
app.use('/legal', legalRouter)


// Listen on port 5000
app.listen(port, () => console.log(`Listening on port ${port}`))		