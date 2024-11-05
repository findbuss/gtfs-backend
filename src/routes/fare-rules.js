// routes/fareRules.js
import express from "express";
import { getFareRules } from "gtfs";

const router = express.Router();

router.get("/", (req, res) => {
  const fareRules = getFareRules();
  res.json(fareRules);
});

export default router;
