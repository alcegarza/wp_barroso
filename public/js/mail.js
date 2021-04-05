/*const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


const auth = {
	auth: {
		api_key:'a8939d46fe5a669a1e8e7ae439613ba3-e687bab4-ec9e3a1b',
		domain:'sandboxe204c01882784282a4183b3a279cb001.mailgun.org'
	}
};

const transporter = nodemailer.createTransport(mailGun(auth));



const sendMail = (name, email, subject, message) => {
	

		var mailOptions = {
		from: '',
		to:'rocioacgz@gmail.com',
		subject:subject,
		text: name + ': ' + message
		};
		console.log(mailOptions,'malo')

		if(name.length > 3 && subject.length >3 && message.length > 0){
		console.log('hola');

		mailOptions = {
		from: email,
		to:'rocioacgz@gmail.com',
		subject:subject,
		text: name + ': ' + message
		};
		console.log(mailOptions,'bueno');
		}

		const sendMail = (name, email, subject, message) => {

			if(name.length < 4 && subject.length <3 && message.length < 0){
				email = ''
			}

		const mailOptions = {
		from: email,
		to:'rocioacgz@gmail.com',
		subject:subject,
		text: name + ': ' + message

};
console.log(mailOptions,'bueno');

	

transporter.sendMail(mailOptions, function(err, data){
	console.log(mailOptions,'a mandar');
	console.log(data);
if (err){
	console.log(data,'Error Occurs');
	} else {
		console.log(data,'message sent')
		alert("Your email has been sent!");
	}	
});

}

module.exports = sendMail;*/



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