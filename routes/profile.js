const express = require("express");

const router = express.Router();

const passport = require("passport");

const {
  fetchProfile,
  updateProfile,
} = require("../controllers/profileController");

// router.param("profileId", async (req, res, next, profileId) => {
//   const profile = await fetchProfile(profileId, next);
//   if (profile) {
//     req.profile = profile;
//     next();
//   } else {
//     const err = new Error("Profile is not found");
//     err.status = 404;
//     next(err);
//   }
// });

router.get("/", passport.authenticate("jwt", { session: false }), fetchProfile);

router.put(
  "/",
  passport.authenticate("jwt", { session: false }),
  updateProfile
);

module.exports = router;
