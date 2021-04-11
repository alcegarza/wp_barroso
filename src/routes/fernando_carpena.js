const express = require('express')
const fernando_carpena = express.Router()

fernando_carpena.get('', async(req, res) =>{

	res.render('fernando_carpena')
})

module.exports = fernando_carpena