const { Profile, User } = require("../db/models");

exports.fetchProfile = async (profileId, next) => {
  try {
    await Profile.findByPk(profileId);
  } catch (error) {
    next(error);
  }
};

// DON'T TOUCH IT PLEEASE

// exports.profileCreate = async (req, res, next) => {
//   try {
//     const foundUser = await User.findByPk(req.user.id);
//     let newProfile = [];
//     if (foundUser) {
//       req.body.userId = req.user.id;
//       newProfile = await Profile.create(req.body);
//     }
//     res.json(newProfile);
//   } catch (error) {
//     next(error);
//   }
// };

exports.profileList = async (req, res, next) => {
  try {
    const profile = await Profile.findAll();
    res.json(profile);
  } catch (error) {
    next(error);
  }
};
