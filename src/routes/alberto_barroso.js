const express = require('express')
const alberto_barroso = express.Router()

alberto_barroso.get('', async(req, res) =>{

	res.render('alberto_barroso')
})

module.exports = alberto_barroso