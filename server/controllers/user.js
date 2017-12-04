const User = require('../models/user');
const setUserInfo = require('../helpers').setUserInfo;
const setProfile = require('../helpers').setProfile;
const Case = require('../models/case');

//= =======================================
// User Routes
//= =======================================
exports.viewProfile = function (req, res, next) {
  const userId = req.params.userId; 
  console.log("req user", req.user);
  console.log("req params", req.params);
  if (req.user._id.toString() !== userId) { return res.status(401).json({ error: 'You are not authorized to view this user profile.' }); }
  User.findById(userId, (err, user) => {
    if (err) {
      res.status(400).json({ error: 'No user could be found for this ID.' });
      return next(err);
    }

    const userToReturn = setProfile(user);

    return res.status(200).json({ user: userToReturn });
  });
};

exports.postData = function (req, res, next) {
  const isPlaintiff = req.body.isPlaintiff;
  const caseNumber = req.body.caseNumber;
  const caseType = req.body.caseType;
  const userId = req.params.userId;

  if (req.user._id.toString() !== userId) { return res.status(401).json({ error: 'You are not authorized to view this user profile.' }); }
  User.findById(userId, (err, user) => {
    if (err) {
      res.status(400).json({ error: 'No user could be found for this ID.' });
      return next(err);
    }

    //if case already there, either write or res.err

    user.cases.push({ isPlaintiff, caseNumber, caseType });
    user.save(function(err, user){
      if (err) {
        res.status(400).json({ error: 'Case cannot be saved.' });
        return next(err);
      }
      console.log('Sucessfully saved!');
      res.status(200).json({type: 'post_data', payload: user.cases});
    })
    

  });
};

exports.getData = function (req, res, next) {
  const userId = req.params.userId;
  if (req.user._id.toString() !== userId) { return res.status(401).json({ error: 'You are not authorized to view this user profile.' }); }
  User.findById(userId, (err, user) => {
    if (err) {
      res.status(400).json({ error: 'No user could be found for this ID.' });
      return next(err);
    }

      console.log("User: ", user.cases);
      console.log('Sucessfully retrieved!');
      // res.status(200).json({ cases: user.cases });
      res.status(200).json({ cases: user.cases });
    });
    

};
//   const userId = req.params.userId;
 