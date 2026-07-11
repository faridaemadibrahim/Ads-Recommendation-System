import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes";
import categoryRoutes from "./routes/category.routes";
import adRoutes from "./routes/ad.routes";
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
app.get("/", (req, res) => {
  res.send("Ads Recommendation API");
});
export default app;
