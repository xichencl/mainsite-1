const User = require('../models/user');
const setUserInfo = require('../helpers').setUserInfo;
const setProfile = require('../helpers').setProfile;

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

//   const userId = req.params.userId;
 