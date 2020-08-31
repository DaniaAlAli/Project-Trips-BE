const express = require("express");

const router = express.Router();

const passport = require("passport");

const upload = require("../middleware/multer");

const { updateProfile } = require("../controllers/profileController");

router.put(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  updateProfile
);

module.exports = router;
