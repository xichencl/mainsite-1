// Importing Passport, strategies, and config
const passport = require('passport'),
  User = require('../models/user'),
  config = require('./main'),
  JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt,
  LocalStrategy = require('passport-local'),
  OIDCStrategy = require('passport-azure-ad').OIDCStrategy;


passport.serializeUser(function(user, done) {
  done(null, user.oid);
});

passport.deserializeUser(function(oid, done) {
  findByOid(oid, function (err, user) {
    done(err, user);
  });
});


// array to hold signed-in users - in memory for testing
var users = [];

var findByOid = function(oid, fn) {
    for (var i = 0, len = users.length; i < len; i++) {
        var user = users[i];
        log.info('we are using user: ', user);
        if (user.oid === oid) {
            return fn(null, user);
        }
    }
    return fn(null, null);
};

//create a logger
// const log = bunyan.createLogger({
//   name : "MS AAD OIDC Web App"
// });

// Setting username field to email rather than username
const localOptions = {
  usernameField: 'email'
};

// Setting up local login strategy
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {  
  console.log("local strategy invoked");
  User.findOne({ email }, (err, user) => {
    if (err) { return done(err); }
    if (!user) { return done(null, false, { error: 'Your login details could not be verified. Please try again.' }); }

    user.comparePassword(password, (err, isMatch) => {
      if (err) { return done(err); }
      if (!isMatch) { return done(null, false, { error: 'Your login details could not be verified. Please try again.' }); }

      return done(null, user);
    });
  });
  
});

// Setting JWT strategy options
const jwtOptions = {
  // Telling Passport to check authorization headers for JWT
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
  // Telling Passport where to find the secret
  secretOrKey: config.secret

  // TO-DO: Add issuer and audience checks
};

// Setting up JWT login strategy
const jwtLogin = new JwtStrategy(jwtOptions, (jwt_payload, done) => {
  console.log("jwt invoked");
  console.log(jwt_payload._id);
  User.findById(jwt_payload._id, (err, user) => {
    if (err) { return done(err, false); }

    if (user) {
      // console.log("User:", user);
      done(null, user);
    } else {
      done(null, false);
    }
  });
});




//OIDCStrategy 
const oidcOptions = {
    identityMetadata: config.creds.identityMetadata,
    clientID: config.creds.clientID,
    responseType: config.creds.responseType,
    responseMode: config.creds.responseMode,
    redirectUrl: config.creds.redirectUrl,
    allowHttpForRedirectUrl: config.creds.allowHttpForRedirectUrl,
    clientSecret: config.creds.clientSecret,
    validateIssuer: config.creds.validateIssuer,
    isB2C: config.creds.isB2C,
    issuer: config.creds.issuer,
    passReqToCallback: config.creds.passReqToCallback,
    scope: config.creds.scope,
    loggingLevel: config.creds.loggingLevel,
    nonceLifetime: config.creds.nonceLifetime,
    nonceMaxAmount: config.creds.nonceMaxAmount,
    useCookieInsteadOfSession: config.creds.useCookieInsteadOfSession,
    cookieEncryptionKeys: config.creds.cookieEncryptionKeys,
    clockSkew: config.creds.clockSkew,  
};

const oidcLogin = new OIDCStrategy(oidcOptions, 
  function(iss, sub, profile, accessToken, refreshToken, done) {
    if (!profile.oid) {
      return done(new Error("No oid found"), null);
    }
    // asynchronous verification, for effect...
    process.nextTick(function () {
      findByOid(profile.oid, function(err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          // "Auto-registration"
          console.log("auto-registration used")
          users.push(profile);
          return done(null, profile);
        }
        return done(null, user);
      });
    });
  }
  );

passport.use(jwtLogin);
passport.use(localLogin);
passport.use(oidcLogin);




// Passport session setup. (Section 2)

//   To support persistent sign-in sessions, Passport needs to be able to
//   serialize users into the session and deserialize them out of the session. Typically,
//   this is done simply by storing the user ID when serializing and finding
//   the user by ID when deserializing.
// passport.serializeUser(function(user, done) {
//     console.log('serializing user...');
//     done(null, user.email);
// });

// passport.deserializeUser(function(id, done) {
//     console.log('deserializing user...');
//     findByEmail(id, function (err, user) {
//         done(err, user);
//     });
// });


