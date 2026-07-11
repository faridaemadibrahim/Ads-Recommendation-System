import { Router } from "express";
import adController from "../controllers/ad.controller";
import authMiddleware from "../middleware/auth.middleware";
import adminMiddleware from "../middleware/admin.middleware";

const router = Router();

// Public
router.get("/", adController.getAll);
router.get("/:id", adController.getById);

// Admin
router.post("/", authMiddleware, adminMiddleware, adController.create);

router.put("/:id", authMiddleware, adminMiddleware, adController.update);

router.delete("/:id", authMiddleware, adminMiddleware, adController.delete);

export default router;
