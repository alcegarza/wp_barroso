const express = require('express')
const legalRouter = express.Router()

legalRouter.get('', async(req, res) =>{

	res.render('legal')
})

module.exports = legalRouter