import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import adRoutes from "./routes/ad.routes.js";
import interestRoutes from "./routes/interest.routes.js";
import behaviorRoutes from "./routes/behavior.routes.js";
import recommendationRoutes from "./routes/recommendation.routes";
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.send("Welcome to Ads Recommendation Server");
});
app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/ads", adRoutes);
app.use("/api/interests", interestRoutes);
app.use("/api/behaviors", behaviorRoutes);
app.use("/api/recommendations", recommendationRoutes);
app.get("/", (req, res) => {
  res.send("Ads Recommendation API");
});
export default app;
