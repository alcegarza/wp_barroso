const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


const auth = {
	auth: {
		api_key:'',
		domain:''
	}
};

const transporter = nodemailer.createTransport(mailGun(auth));



const sendMail = (name, email, subject, message) => {

	const mailOptions = {
	from: email,
	to:'rocioacgz@gmail.com',
	subject:subject,
	text: name + ': ' + message
};

transporter.sendMail(mailOptions, function(err, data){
if (err){
	console.log('Error Occurs');
	} else {
		console.log('message sent')
		alert("Your email has been sent!");
	}	
});

}

module.exports = sendMail;