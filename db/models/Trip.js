const { DataTypes, Model } = require("sequelize");

const db = require("../db");

class Trip extends Model {}

Trip.init(
  {
    destination: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    details: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,

    },
  },
  {
    sequelize: db,
  }
);

module.exports = Trip;
