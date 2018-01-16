const config = require('./main');
const mailgun = require('mailgun-js')({ apiKey: config.mailgun_priv_key,
  domain: config.mailgun_domain });

// Create and export function to send emails through Mailgun API
exports.sendEmail = function (recipient, message) {
  console.log("Recipient: ", recipient);
  console.log("Message: ", message);

  const data = {
    from: 'Mailgun Sandbox <postmaster@sandboxb860c02145f84a778bd2e7c10455db4b.mailgun.org>',
    to: recipient,
    subject: message.subject,
    text: message.text
  };

  console.log("data: ", data);

  mailgun.messages().send(data, (error, body) => {
     console.log("Data sent");
     console.log(body);
  });
};

exports.contactForm = function (sender, message) {
  const data = {
    from: sender,
    to: 'you@yourdomain.com',
    subject: message.subject,
    text: message.text
  };

  mailgun.messages().send(data, (error, body) => {
   console.log(body);
  });
};
