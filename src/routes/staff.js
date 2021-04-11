const express = require('express')
const staff = express.Router()

staff.get('', async(req, res) =>{

	res.render('staff')
})

module.exports = staff