const express = require('express')
const legalRouter = express.Router()

legaRouter.get('', async(req, res) =>{

	res.render('legal')
})

module.exports = legalRouter