const express = require('express')
const bea_ortiz = express.Router()

bea_ortiz.get('', async(req, res) =>{

	res.render('bea_ortiz')
})

module.exports = bea_ortiz