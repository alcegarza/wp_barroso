const express = require('express')
const more_galleryRouter = express.Router()

more_galleryRouter.get('', async(req, res) =>{

	res.render('more_gallery')
})

module.exports = more_galleryRouter