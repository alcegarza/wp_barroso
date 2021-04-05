const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


const auth = {
	auth: {
		api_key:'a8939d46fe5a669a1e8e7ae439613ba3-e687bab4-ec9e3a1b',
		domain:'sandboxe204c01882784282a4183b3a279cb001.mailgun.org'
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

