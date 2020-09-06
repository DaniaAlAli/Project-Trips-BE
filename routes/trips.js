const express = require("express");
const passport = require("passport");
const router = express.Router();
const upload = require("../middleware/multer");

const {
  tripList,
  fetchTrip,
  createTrip,
  updateTrip,
  deleteTrip,
} = require("../controllers/tripController");

router.param("tripId", async (req, res, next, tripId) => {
  const trip = await fetchTrip(tripId, next);
  if (trip) {
    req.trip = trip;
    next();
  } else {
    const err = new Error("Trip is not found");
    err.status = 404;
    next(err);
  }
});

router.get("/", tripList);

// Create new trip
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  createTrip
);

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
