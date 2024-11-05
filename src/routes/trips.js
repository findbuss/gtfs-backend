// routes/trips.js
import express from "express";
import { getTrips } from "gtfs";

const router = express.Router();

router.get("/", (req, res) => {
  const { route_id } = req.query;

  if (route_id) {
    const trips = getTrips({ route_id });
    res.json(trips);
  }
});

export default router;
