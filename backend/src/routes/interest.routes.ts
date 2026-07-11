import { Router } from "express";
import interestController from "../controllers/interest.controller";
import authMiddleware from "../middleware/auth.middleware";

const router = Router();

router.post("/", authMiddleware, interestController.save);

export default router;
