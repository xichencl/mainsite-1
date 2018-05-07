
/*
create a nodemailer transporter to send emails via office 365 smtp service
*/
const { USER, PASS } = require('../../secret.env');

const nodemailer = require('nodemailer');

// console.log(user, pass);

const smtpOptions = {
	port: 587,
	host: "smtp.office365.com",
	secure: false,
	auth: {
		user: USER,
		pass: PASS 
	}
};

let transporter = nodemailer.createTransport(smtpOptions);



exports.sendMail = (receipient, message) => {
	const mailOptions = {
		from: '"Xi Chen" <xchen@contracosta.courts.ca.gov>',
		to: receipient,
		subject: message.subject,
		text: message.text,
		html: `<p>${message.text}</p>`
	};
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error);
		}
		console.log("Message sent: %s", info.messageId);
	});
};






