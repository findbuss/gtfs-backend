// routes/stops.js
import express from "express";
import { getStops, getStopsAsGeoJSON } from "gtfs";

const router = express.Router();

router.get("/", (req, res) => {
  const {
    stop_id,
    stop_name,
    stop_lat,
    stop_lon,
    bounding_box_side_m,
    route_id,
  } = req.query;

  if (stop_lat && stop_lon && bounding_box_side_m) {
    const stopsGeojson = getStopsAsGeoJSON(
      {
        stop_lat,
        stop_lon,
      },
      {
        bounding_box_side_m,
      }
    );
    res.json(stopsGeojson);
  }

  if (route_id) {
    const stopsGeojson = getStopsAsGeoJSON({ route_id });
    res.json(stopsGeojson);
  }

  if (stop_id) {
    const stopsGeojson = getStopsAsGeoJSON({ stop_id });
    res.json(stopsGeojson);
  }
});

export default router;
