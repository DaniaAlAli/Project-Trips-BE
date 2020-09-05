const { DataTypes, Model } = require("sequelize");

const db = require("../db");

class Trip extends Model {}

Trip.init(
  {
    country: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    destination: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    details: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.STRING,
    },
    profileName: {
      type: DataTypes.STRING,
    },

    favorited: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },

  {
    sequelize: db,
  }
);

module.exports = Trip;
