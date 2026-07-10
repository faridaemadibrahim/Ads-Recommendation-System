import { Router } from "express";
import categoryController from "../controllers/category.controller";
import authMiddleware from "../middleware/auth.middleware";
import adminMiddleware from "../middleware/admin.middleware";

const router = Router();

router.post("/", authMiddleware, adminMiddleware, categoryController.create);
router.get("/", categoryController.getAll);
export default router;
