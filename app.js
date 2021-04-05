const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 5000
const sendMail = require('./public/js/mail')

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
const contactRouter = require('./src/routes/contact')


app.use('/', indexRouter)
app.use('/legal', legalRouter)
// app.use('/contact', contactRouter)

app.post('/contact', (req, res) => {

	const {name, email, subject, message} =req.body;

	console.log('Data: ', req.body);
	sendMail(name, email, subject, message);

	res.json({message: "Mensaje recibido"})
});

// app.get('/contact', (req, res) =>{
// 	res.sendFile(path.join(__dirname,'views','index.html'));
// });


// Listen on port 5000
app.listen(port, () => console.log(`Listening on port ${port}`))		