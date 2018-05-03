
/*
create a nodemailer transporter to send emails via office 365 smtp service
*/
const nodemailer = require('nodemailer');

const smtpOptions = {
	port: 587,
	host: smtp.office365.com,
	secure: true,
	auth: {
		user: 'xchen@contracosta.courts.ca.gov',
		password: '1750Lilly@' 
	}
};

let transporter = nodemailer.createTransport(smtpOptions);



exports.sendMail = (receipient, message) => {
	const mailOptions = {
		from: '"Xi Chen" <xchen@contracosta.courts.ca.gov>',
		to: receipient,
		subject: message.subject,
		text: message.text
	};
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error);
		}
		console.log("Message sent: %s", info.messageId);
	});
};






