import express from "express";
import cors from "cors";
import startGtfsConfig from "./config/gtfs.config.js";
import agenciesRoutes from "./routes/agency.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

startGtfsConfig;

// Rotas
app.use("/api/agencies", agenciesRoutes);
// app.use("/api/fares", fareRoutes);
// app.use("/api/fare-rules", fareRulesRoutes);
// app.use("/api/trips", tripRoutes);
// app.use("/api/routes", routeRoutes);
// app.use("/api/shapes", shapeRoutes);
// app.use("/api/stops", stopRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
