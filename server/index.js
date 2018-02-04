// Importing Node modules and initializing Express
const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  router = require('./router'),
  mongoose = require('mongoose'),
  socketEvents = require('./socketEvents'),
  config = require('./config/main'),
  path = require('path'),
  expressSession = require('express-session'),
  MongoStore = require('connect-mongo')(expressSession),
  passport = require('passport'),
  cookieParser = require('cookie-parser');
  // ReactEngine = require('react-engine'),
  // routes = require('../client/src/router');
  // cors = require('cors');
console.log(__dirname);
const React = require('react');
const { createStore } = require('redux');
const { Provider } = require('react-redux');
const { renderToString } = require('react-dom/server');
const rootReducer = require('../client/src/reducers/index');

// Database Setup
mongoose.Promise = require('bluebird');
mongoose.connect(config.database, { useMongoClient: true })
        .then(
            ()=> {console.log("Connected to DB")},
            (err) => {console.log("error: ", err)}
          );

// const engine = ReactEngine.server.create({
//   routes,
//   routesFilePath: path.join(__dirname, '/client/router.js') 
// });

// app.engine('.jsx', engine);

// app.set('views', path.join(__dirname + '../client'));
// app.set('view engine', 'jsx');
// app.set('view', ReactEngine.expressView);

//set up session middleware using mongoStore
app.use(expressSession({
  secret: 'secret',
  cookie: {maxAge: config.mongoDBSessionMaxAge * 1000},
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    clear_interval: config.mongoDBSessionMaxAge
  })
}));

app.use(cookieParser());
const env = require('dotenv').load();


// Start the server
let server;
if (process.env.NODE_ENV != config.test_env) {
  server = app.listen(process.env.PORT);
  console.log(`Your server is running on port ${process.env.PORT}.`);
} else{
  server = app.listen(config.test_port);
}

//Serve the front end
app.use(express.static(path.join(__dirname, '../client/')));


const handleRender = (req, res) => {
  console.log("handleRender for req.user: ", req.user);
  let preloadedState = {
    user: {profile: {firstName: req.user.given_name, lastName: req.user.family_name, email: req.user.upn}, cases: [], message: '', error: ''},
    auth: {error: '', message:'', content: '', authenticated: true}
  };
  const store = createStore(rootReducer, preloadedState);
  const html = renderToString(
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
  const finalState = store.getState();
  res.send(renderFullPage(html, finalState));
};

const renderFullPage = (html, preloadedState) => {
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">

    <title>CA Legal Self Help</title>

    <script type="text/javascript" async></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Judson:700|Source+Sans+Pro:300,600,700" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    <!-- Import bundled/compiled CSS -->
    <link rel="stylesheet" type="text/css" href="/src/public/stylesheets/app.css">

  </head>
  <body>
    <div id="root">${html}
    </div>
    <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
    </script>

    <script src="/bundle.js"></script>

  </body>
</html>
  `;
};

// app.use(handleRender);



app.get('/', (req, res) => {
  // res.render(req.url, { user: req.user });
  res.sendFile('index.html', {root : path.join(__dirname, '../client/')});
});

app.get(/^(?:(?!\/api).)*$/, handleRender(req, res));
// app.get(/^(?:(?!\/api).)*$/, (req, res) => {
//   // res.render(req.url, { user: req.user });
//   // res.sendFile('index.html', {root : path.join(__dirname, '../client/')});
// });

// app.get('/portal', (req, res) => {
//   res.sendFile('index.html', {root : path.join(__dirname, '../client/')});
// });

// app.get('/register', (req, res) => {
//   res.sendFile('index.html', {root : path.join(__dirname, '../client/')});
// });

// app.get('/api/chat/test', (req, res) => {res.send("Hi there!")});




//set up sockets for multi-client chat
const io = require('socket.io').listen(server);

socketEvents(io);

// Set static file location for production
// app.use(express.static(__dirname + '/public'));

// Setting up basic middleware for all Express requests
app.use(bodyParser.urlencoded({ extended: true })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
app.use(logger('dev')); // Log requests to API using morgan

// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

// Enable CORS from client-side
app.use((req, res, next) => {

  console.log("adding header");
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

// app.use(cors({
//   origin: 'http://localhost:3000/login',
//   credentials: true
// }));

// Import routes to be served
router(app);

// necessary for testing
module.exports = server;