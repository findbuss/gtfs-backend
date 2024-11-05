// routes/fareAttributes.js
import express from "express";
import { getFareAttributes } from "gtfs";

const router = express.Router();

router.get("/", (req, res) => {
  const fareAttributes = getFareAttributes();

  res.json(fareAttributes);
});

export default router;
