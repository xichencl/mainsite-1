// Importing Node modules and initializing Express
const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  router = require('./router'),
  mongoose = require('mongoose'),
  socketEvents = require('./socketEvents'),
  config = require('./config/main'),
  path = require('path');

// Database Setup
mongoose.Promise = require('bluebird');
mongoose.connect(config.database, { useMongoClient: true });

// Start the server
let server;
if (process.env.NODE_ENV != config.test_env) {
  server = app.listen(config.port);
  console.log(`Your server is running on port ${config.port}.`);
} else{
  server = app.listen(config.test_port);
}

//Serve the front end
app.get('/', (req, res) => {
  res.sendFile('index.html', {root : path.join(__dirname, '../client/')});
});

app.use(express.static(path.join(__dirname, '../client/')));


//set up sockets for multi-client chat
const io = require('socket.io').listen(server);

socketEvents(io);

// Set static file location for production
// app.use(express.static(__dirname + '/public'));

// Setting up basic middleware for all Express requests
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
app.use(logger('dev')); // Log requests to API using morgan

// Enable CORS from client-side
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});



// Import routes to be served
router(app);

// necessary for testing
module.exports = server;