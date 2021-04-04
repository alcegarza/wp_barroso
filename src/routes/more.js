const express = require('express')
const moreRouter = express.Router()

moreRouter.get('', async(req, res) =>{

	res.render('more')
})

module.exports = moreRouter