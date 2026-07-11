import { Router } from "express";
import behaviorController from "../controllers/behavior.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import adminMiddleware from "../middleware/admin.middleware.js";

const router = Router();

// User
router.post("/", authMiddleware, behaviorController.create);

router.get("/me", authMiddleware, behaviorController.getMyBehaviors);

// Admin
router.get(
  "/ad/:id",
  authMiddleware,
  adminMiddleware,
  behaviorController.getByAd,
);

export default router;
