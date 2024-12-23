import express from "express";

import { getAgencies } from "gtfs";

const router = express.Router();

router.get("/", (req, res) => {
  const agencies = getAgencies();
  res.json(agencies);
});

export default router;
