import { Router } from "express";
import categoryController from "../controllers/category.controller";
import authMiddleware from "../middleware/auth.middleware";
import adminMiddleware from "../middleware/admin.middleware";

const router = Router();

router.post("/", authMiddleware, adminMiddleware, categoryController.create);
router.get("/", categoryController.getAll);
router.get("/:id", categoryController.getById);
router.put("/:id", authMiddleware, adminMiddleware, categoryController.update);
router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  categoryController.delete,
);
export default router;
