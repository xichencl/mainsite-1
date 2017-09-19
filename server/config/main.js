const { DB_URL, MAILGUN } = require('./.env');

module.exports = {
  // Secret key for JWT signing and encryption
  secret: 'super secret passphrase',
  // Database connection information
  // database: 'mongodb://localhost:27017',
  database: DB_URL,
  // Setting port for server
  port: 3000,
  // Configuring Mailgun API for sending transactional email
  // Rt now using authorized accounts only for testing -->
  mailgun_priv_key: MAILGUN,
  // Configuring Mailgun domain for sending transactional email
  mailgun_domain: 'mailgun domain here',
  // Mailchimp API key
  mailchimpApiKey: 'mailchimp api key here',
  // SendGrid API key
  sendgridApiKey: 'sendgrid api key here',
  // Stripe API key
  stripeApiKey: 'stripe api key goes here',
  // necessary in order to run tests in parallel of the main app
  test_port: 3001,
  test_db: 'mern-starter-test',
  test_env: 'test'
};
