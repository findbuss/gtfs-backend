// routes/stopTimes.js
import express from "express";
import { getStoptimes } from "gtfs";

const router = express.Router();

router.get("/", (req, res) => {
  const { trip_id, stop_id } = req.query;

  if (trip_id) {
    const stopTimes = getStoptimes({ trip_id });
    res.json(stopTimes);
  }

  if (stop_id) {
    const stopTimes = getStoptimes({ stop_id });
    res.json(stopTimes);
  }
});

export default router;
