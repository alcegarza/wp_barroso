const express = require('express')
const patri_herrera = express.Router()

patri_herrera.get('', async(req, res) =>{

	res.render('patri_herrera')
})

module.exports = patri_herrera