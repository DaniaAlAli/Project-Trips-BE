const express = require("express");
const router = express.Router();
const { signup, signin } = require("../controllers/userController");
const passport = require("passport");
const { createTrip } = require("../controllers/userController");

router.param("profileId", async (req, res, next, profileId) => {
  const profile = await fetchVendor(profileId, next);
  if (profile) {
    req.profile = profile;
    next();
  } else {
    const err = new Error("Vendor is not found");
    err.status = 404;
    next(err);
  }
});

// Sign up
router.post("/signup", signup);

// Sign in
router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signin
);

module.exports = router;
