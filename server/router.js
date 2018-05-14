const AuthenticationController = require('./controllers/authentication');
const UserController = require('./controllers/user');
const ChatController = require('./controllers/chat.js');
const CommunicationController = require('./controllers/communication');
const StripeController = require('./controllers/stripe');
const express = require('express');
const passport = require('passport');
const ROLE_MEMBER = require('./constants').ROLE_MEMBER;
const ROLE_CLIENT = require('./constants').ROLE_CLIENT;
const ROLE_OWNER = require('./constants').ROLE_OWNER;
const ROLE_ADMIN = require('./constants').ROLE_ADMIN;

const passportService = require('./config/passport');

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });
const requireOIDCLogin = (req, res, next) => {return passport.authenticate('azuread-openidconnect', 
      { response: res,                      // required
        // resourceURL: config.resourceURL,    // optional. Provide a value if you want to specify the resource.
        // customState: 'my_state',            // optional. Provide a value if you want to provide custom state value.
        failureRedirect: '/' 
      });};
const config = require('./config/main');

// const apiai = require('apiai');
// const ai = apiai('8fcfe02fdf5b42628700e6458795e6d4');

module.exports = function (app) {
   
  // Initializing route groups
  const apiRoutes = express.Router(),
    authRoutes = express.Router(),
    userRoutes = express.Router(),
    chatRoutes = express.Router(),
    payRoutes = express.Router(),
    communicationRoutes = express.Router();

  //= ========================
  // Auth Routes
  //= ========================

  // Set auth routes as subgroup/middleware to apiRoutes
  apiRoutes.use('/auth', authRoutes);

  //azure registration routes
  // authRoutes.get('/azure-login', );


  // Registration route
  authRoutes.post('/register', AuthenticationController.register);

  // Login route
  authRoutes.post('/login', requireLogin, AuthenticationController.login);

  //azure ad login route
  authRoutes.get('/openID', requireOIDCLogin, (req, res) => {
      console.log("AD login success");
      console.log("req: ", req);
      console.log("res: ", res);
  });
  // Password reset request route (generate/send token)
  authRoutes.post('/forgot-password', AuthenticationController.forgotPassword);

  // Password reset route (change password using token)
  authRoutes.post('/reset-password/:token', AuthenticationController.verifyToken);

  //= ========================
  // User Routes
  //= ========================

  // Set user routes as a subgroup/middleware to apiRoutes
  apiRoutes.use('/user', userRoutes);

  // View user profile route
  userRoutes.get('/:userId', requireAuth, UserController.viewProfile);
  userRoutes.post('/:userId/updateCase', requireAuth, UserController.updateCase);
  userRoutes.post('/:userId/updateProfile', requireAuth, UserController.updateProfile);
  userRoutes.post('/:userId/updateChecklist', requireAuth, UserController.updateChecklist);
  userRoutes.get('/:userId/:caseId', requireAuth, UserController.getChecklist);
  userRoutes.delete('/:userId/:caseId', requireAuth, UserController.deleteCase);
  
    
  // Test protected route
  apiRoutes.get('/protected', requireAuth, (req, res) => {
    res.send({ content: 'The protected test route is functional!' });
  });

  apiRoutes.get('/admins-only', requireAuth, AuthenticationController.roleAuthorization(ROLE_ADMIN), (req, res) => {
    res.send({ content: 'Admin dashboard is working.' });
  });

  //= ========================
  // Chat Routes
  //= ========================

  apiRoutes.use('/chat', chatRoutes);
  chatRoutes.get('/test', (req, res)=> {res.send("it worked!!!")});

  // route: /chat/message
  // console.log(ChatController.getMessageResponse);
  // chatRoutes.post('/message', ()=>{console.log("it worked!!!")});
  
  /*select case type*/
  // chatRoutes.post('/message', (req, res)=> {ChatController.selectCaseType(req, res, ChatController.getMessageResponse)});

  chatRoutes.post('/message', (req, res) => {ChatController.getMessageResponse(req, res)});
  // console.log(ChatController.getWebhookResponse);
  chatRoutes.post('/webhook', (req, res) => {ChatController.getWebhookResponse(req, res)});

  chatRoutes.post('/email', (req, res) => {ChatController.emailChatlog(req, res)});

  chatRoutes.post('/process', (req, res) => {ChatController.processQueries(req, res)});
/*
  // Set chat routes as a subgroup/middleware to apiRoutes
  apiRoutes.use('/chat', chatRoutes);

  // View messages to and from authenticated user
  chatRoutes.get('/', requireAuth, ChatController.getConversations);

  // Retrieve single conversation
  chatRoutes.get('/:conversationId', requireAuth, ChatController.getConversation);

  // Send reply in conversation
  chatRoutes.post('/:conversationId', requireAuth, ChatController.sendReply);

  // Start new conversation
  chatRoutes.post('/new/:recipient', requireAuth, ChatController.newConversation);
*/
  //= ========================
  // Payment Routes
  //= ========================
  apiRoutes.use('/pay', payRoutes);

  // Webhook endpoint for Stripe
  payRoutes.post('/webhook-notify', StripeController.webhook);

  // Create customer and subscription
  payRoutes.post('/customer', requireAuth, StripeController.createSubscription);

  // Update customer object and billing information
  payRoutes.put('/customer', requireAuth, StripeController.updateCustomerBillingInfo);

  // Delete subscription from customer
  payRoutes.delete('/subscription', requireAuth, StripeController.deleteSubscription);

  // Upgrade or downgrade subscription
  payRoutes.put('/subscription', requireAuth, StripeController.changeSubscription);

  // Fetch customer information
  payRoutes.get('/customer', requireAuth, StripeController.getCustomer);

  //= ========================
  // Communication Routes
  //= ========================
  apiRoutes.use('/communication', communicationRoutes);

  // Send email from contact form
  communicationRoutes.post('/contact', CommunicationController.sendContactForm);

  // Set url for API group routes
  app.use('/api', apiRoutes);


app.get('/api/auth/azure-login',
  function(req, res, next) {
    console.log("we are getting a get request");
    passport.authenticate('azuread-openidconnect', 
      { 
        response: res,                      // required
        resourceURL: config.resourceURL,    // optional. Provide a value if you want to specify the resource.
        customState: 'my_state',            // optional. Provide a value if you want to provide custom state value.
        failureRedirect: '/' 
      }
    )(req, res, next);
  },
  function(req, res) {
    console.log('Login was called in the Sample');
    res.redirect('/');
  }
);

// 'GET returnURL'
// `passport.authenticate` will try to authenticate the content returned in
// query (such as authorization code). If authentication fails, user will be
// redirected to '/' (home page); otherwise, it passes to the next middleware.
app.get('/api/auth/openid/return',

  function(req, res, next) {
    console.log("get return url");
    passport.authenticate('azuread-openidconnect', 
      { 
        response: res,                      // required
        failureRedirect: '/'  
      }
    )(req, res, next);
  },
  function(req, res) {
    console.log("next on the callback list");
    console.log("req.user: ", req.user);
    // console.log("req: ", req);
    req.session.save(() => {
      res.redirect('/azure-portal');
    });
    
  });


// 'POST returnURL'
// `passport.authenticate` will try to authenticate the content returned in
// body (such as authorization code). If authentication fails, user will be
// redirected to '/' (home page); otherwise, it passes to the next middleware.
app.post('/api/auth/openid/return',
  function(req, res, next) {
    console.log('we have received a post request');
    passport.authenticate('azuread-openidconnect', 
      { 
        response: res,                      // required
        failureRedirect: '/'  
      }
    )(req, res, next);
  },
  function(req, res, next) {
    console.log('We received a posted return from AzureAD');
    console.log("req session: ", req.session)
    // handleRender(req, res);
    req.session.save(() => {
      res.redirect('/azure-portal');
    });
    
    // res.redirect('/azure-portal');
  });



  // 'logout' route, logout from passport, and destroy the session with AAD.
app.get('/api/logout', function(req, res){
  req.session.destroy(function(err) {
    req.logOut();
    res.redirect(config.destroySessionUrl);
  });
});

function ensureAuthenticated(req, res, next) {
  console.log("ensureAuthenticated req session: ", req.session);
  console.log("isAuthenticated:", req.isAuthenticated());

  if (req.isAuthenticated()) { return next(); }
  req.session.save(()=> {res.redirect('/login');});
};

app.get('/api/azure-user', ensureAuthenticated, function(req, res){
  console.log("req session: ", req.session);
  
  res.status(200).send({user: req.user});
});

app.post('/api/azure-user/updateCase', ensureAuthenticated, UserController.updateCase);

app.delete('/api/azure-user/:caseId', ensureAuthenticated, UserController.deleteCase);

app.post('/api/azure-user/updateChecklist', ensureAuthenticated, UserController.updateChecklist);

app.get('/api/azure-user/:caseId', ensureAuthenticated, UserController.getChecklist);

app.post('/api/azure-user/updateProfile', ensureAuthenticated, UserController.updateProfile);
};
