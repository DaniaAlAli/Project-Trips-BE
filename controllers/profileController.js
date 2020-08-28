const { Profile } = require("../db/models");

exports.fetchProfile = async (profileId, next) => {
  try {
    await Profile.findByPk(profileId);
  } catch (error) {
    next(error);
  }
};
