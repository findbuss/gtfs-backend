// routes/routes.js
import express from "express";
import { getRoutes } from "gtfs";

const router = express.Router();

router.get("/", (req, res) => {
  const { route_id } = req.query;
  const routes = getRoutes({ route_id });
  res.json(routes);
});

export default router;
