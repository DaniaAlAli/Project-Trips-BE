const User = require("./User");
const Trip = require("./Trip");

const Profile = require("./Profile");

// User & Trips
User.hasMany(Trip, { as: "trips", foreignKey: "userId" });
Trip.belongsTo(User, { as: "user" });

// User & profile
User.hasOne(Profile, { as: "profile", foreignKey: "userId" });
Profile.belongsTo(User, { as: "user" });

module.exports = {
  User,
  Trip,
  Profile,
};
