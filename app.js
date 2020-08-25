const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db/db");
const cors = require("cors");

// Passport
const passport = require("passport");
const { localStrategy, jwtStrategy } = require("./middleware/passport");

// Routes
const userRoutes = require("./routes/users");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);

//Not Found Paths
app.use((req, res, next) => {
  const error = new Error("Path Not Found");
  error.status = 404;
  next(error);
});

//Error Handling Middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json(err.message || "Internal Server Error");
});

// Routers
app.use(userRoutes);

const run = async () => {
  try {
    await db.sync();
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
  app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });
};
run();
