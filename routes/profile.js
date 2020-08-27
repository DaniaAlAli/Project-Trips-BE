const express = require("express");

const router = express.Router();

const { fetchProfile } = require("../controllers/profileController");

router.param("profileId", async (req, res, next, profileId) => {
  const profile = await fetchProfile(profileId, next);
  if (profile) {
    req.profile = profile;
    next();
  } else {
    const err = new Error("Profile is not found");
    err.status = 404;
    next(err);
  }
});

// REVIEW: Bad naming. No capital letters in paths. I assume the controller is not ready, so I'm not gonna talk about that
router.get("/My-profile");

module.exports = router;
