import express from "express";

import { getCalendars } from "gtfs";

const router = express.Router();

router.get("/", (req, res) => {
  const calendar = getCalendars();
  res.json(calendar);
});

export default router;
