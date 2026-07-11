import { Router } from "express";
import recommendationController from "../controllers/recommendation.controller";
import authMiddleware from "../middleware/auth.middleware";

const router = Router();

router.get("/", authMiddleware, recommendationController.getRecommendations);

export default router;
