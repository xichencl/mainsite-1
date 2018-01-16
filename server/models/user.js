// Importing Node packages required for schema
const mongoose = require('mongoose');

const bcrypt = require('bcrypt-nodejs');
const ROLE_MEMBER = require('../constants').ROLE_MEMBER;
const ROLE_CLIENT = require('../constants').ROLE_CLIENT;
const ROLE_OWNER = require('../constants').ROLE_OWNER;
const ROLE_ADMIN = require('../constants').ROLE_ADMIN;
const SMALL_CLAIMS = require('../constants').SMALL_CLAIMS, 
GUARDIANSHIP = require('../constants').GUARDIANSHIP, 
FAMILY_LAW = require('../constants').FAMILY_LAW, 
EVICTION = require('../constants').EVICTION, 
DOMESTIC_VIOLENCE = require('../constants').DOMESTIC_VIOLENCE, 
TRAFFIC = require('../constants').TRAFFIC;

const Schema = mongoose.Schema;

//= ===============================
// Case Schema
//= ===============================
const CaseSchema = new Schema({
  isPlaintiff: String,
  caseNumber: {
    type: String,
  },
  caseType: {
    type: String,
    enum: [SMALL_CLAIMS, GUARDIANSHIP, FAMILY_LAW, EVICTION, DOMESTIC_VIOLENCE, TRAFFIC],
    required: true
  },
  plaintiffs: [String],
  defendants: [String],
  steps: [],
  forms: [{ formId: String, status: Boolean}]
},
 {
  timestamps: true
 });

//= ===============================
// User Schema
//= ===============================
const UserSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profile: {
    firstName: { 
      type: String,
      required: true
    },
    lastName: { 
      type: String,
      required: true
    },
    address: {type: String},
    phone: {type: String},
    email: {type: String}
  },
  cases: [CaseSchema],
  role: {
    type: String,
    enum: [ROLE_MEMBER, ROLE_CLIENT, ROLE_OWNER, ROLE_ADMIN],
    default: ROLE_MEMBER
  },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date }
},
  {
    timestamps: true
  });


/* from userschema
stripe: {
    customerId: { type: String },
    subscriptionId: { type: String },
    lastFour: { type: String },
    plan: { type: String },
    activeUntil: { type: Date }
  },
*/
//= ===============================
// User ORM Methods
//= ===============================

// Pre-save of user to database, hash password if password is modified or new
UserSchema.pre('save', function (next) {
  const user = this,
    SALT_FACTOR = 5;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

// Method to compare password for login
UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) { return cb(err); }

    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', UserSchema);
