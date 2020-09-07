const express = require("express");
const router = express.Router();
const { signup, signin, userList } = require("../controllers/userController");
const passport = require("passport");

// REVIEW: Delete commented out code

// router.param("userId", async (req, res, next, userId) => {
//   const user = await fetchUser(userId, next);
//   if (user) {
//     req.user = user;
//     next();
//   } else {
//     const err = new Error("User is not found");
//     err.status = 404;
//     next(err);
//   }
// });

// REVIEW: A better place for this is the profile route
router.get("/profiles", userList);

// Sign up
router.post("/signup", signup);

// Sign in
router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signin
);

module.exports = router;
