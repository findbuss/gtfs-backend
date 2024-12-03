// routes/routes.js
import express from "express";
import { getRoutes } from "gtfs";

const router = express.Router();

router.get("/", (req, res) => {
  const { route_id, route_long_name } = req.query;

  if (route_id) {
    const routes = getRoutes({ route_id });
    res.json(routes);
  }

  if (route_long_name) {
    const routes = getRoutes({ route_long_name });
    res.json(routes);
  }
});

export default router;
