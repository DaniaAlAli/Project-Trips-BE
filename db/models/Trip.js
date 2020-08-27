const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Trip extends Model {}

Trip.init(
  {
    image: {
      type: DataTypes.STRING,
    },

    destination: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true },
    },

    details: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
  }
);

module.exports = Trip;
