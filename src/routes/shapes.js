// routes/shapes.js
import express from "express";
import { getShapesAsGeoJSON } from "gtfs";

const router = express.Router();

router.get("/", (req, res) => {
  const { shape_id } = req.query;

  const shapes = getShapesAsGeoJSON({ shape_id });
  res.json(shapes);
});

export default router;
