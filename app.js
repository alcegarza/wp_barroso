const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 5000
//const sendMail = require('./public/js/mail')

// Static Files
app.use(express.static('public'))

//Data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Templating Engine
app.set('views', './src/views')
app.set('view engine', 'ejs')



// Routes
const indexRouter = require('./src/routes/index')
const legalRouter = require('./src/routes/legal')
const more_galleryRouter = require('./src/routes/more_gallery')


app.use('/', indexRouter)
app.use('/legal', legalRouter)
app.use('/more_gallery', more_galleryRouter)


// Listen on port 5000
app.listen(port, () => console.log(`Listening on port ${port}`))		