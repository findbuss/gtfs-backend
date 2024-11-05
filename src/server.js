// index.js (seu arquivo principal)
import express from "express";
import cors from "cors";
import startGtfsConfig from "./config/gtfs.config.js";

// Importe todas as rotas
import agenciesRoutes from "./routes/agency.js";
import calendarRoutes from "./routes/calendar.js";
import fareAttributesRoutes from "./routes/fare-attributes.js";
import fareRulesRoutes from "./routes/fare-rules.js";
import tripsRoutes from "./routes/trips.js";
import routesRoutes from "./routes/routes.js";
import shapesRoutes from "./routes/shapes.js";
import stopsRoutes from "./routes/stops.js";
import stopTimesRoutes from "./routes/stop-times.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Inicie a configuração do GTFS antes de definir as rotas!
startGtfsConfig;

console.log("Dados GTFS carregados com sucesso!");

// Rotas
app.use("/api/agencies", agenciesRoutes);
app.use("/api/calendar", calendarRoutes);
app.use("/api/fare-attributes", fareAttributesRoutes);
app.use("/api/fare-rules", fareRulesRoutes);
app.use("/api/trips", tripsRoutes);
app.use("/api/routes", routesRoutes);
app.use("/api/shapes", shapesRoutes);
app.use("/api/stops", stopsRoutes);
app.use("/api/stop-times", stopTimesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
