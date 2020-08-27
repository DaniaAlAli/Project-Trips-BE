const express = require("express");
const passport = require("passport");

const { updateTrip, deleteTrip } = require("../controllers/tripController");

const router = express.Router();
// REVIEW: Why is the file called `route.js`? You don't need this file, move the routes to `trips.js`

// updateTrip

router.put(
  "/:tripId",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  updateTrip
);

// deleteTrip

router.delete(
  "/:tripId",
  passport.authenticate("jwt", { session: false }),
  deleteTrip
);

module.exports = router;
