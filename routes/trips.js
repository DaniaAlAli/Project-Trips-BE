const express = require("express");

const router = express.Router();

const {
  tripList,
  fetchTrip,
  createTrip,
} = require("../controllers/tripController");
const passport = require("passport");

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
router.post("/", passport.authenticate("jwt", { session: false }), createTrip);

module.exports = router;
