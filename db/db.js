const { Sequelize } = require("sequelize");

const db = new Sequelize({
  username: "postgres",
  password: "daaasja93",
  database: "trips-db",
  dialect: "postgres",
  host: "localhost",
  logging: false,
});

module.exports = db;
