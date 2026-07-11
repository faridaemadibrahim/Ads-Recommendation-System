import type { Request, Response } from "express";
import categoryService from "../services/category.service";
import {
  createCategorySchema,
  updateCategorySchema,
} from "../validator/category.validator.js";

class CategoryController {
  async create(req: Request, res: Response) {
    try {
      const { name } = createCategorySchema.parse(req.body);

      const category = await categoryService.create(name);

      return res.status(201).json({
        message: "Category created successfully",
        category,
      });
    } catch (error) {
      return res.status(400).json({
        message:
          error instanceof Error ? error.message : "Something went wrong",
      });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const categories = await categoryService.getAll();

      return res.status(200).json(categories);
    } catch (error) {
      return res.status(400).json({
        message:
          error instanceof Error ? error.message : "Something went wrong",
      });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);

      const category = await categoryService.getById(id);

      return res.status(200).json(category);
    } catch (error) {
      return res.status(400).json({
        message:
          error instanceof Error ? error.message : "Something went wrong",
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);

      const { name } = updateCategorySchema.parse(req.body);

      const category = await categoryService.update(id, name);

      return res.status(200).json({
        message: "Category updated successfully",
        category,
      });
    } catch (error) {
      return res.status(400).json({
        message:
          error instanceof Error ? error.message : "Something went wrong",
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);

      await categoryService.delete(id);

      return res.status(200).json({
        message: "Category deleted successfully",
      });
    } catch (error) {
      return res.status(400).json({
        message:
          error instanceof Error ? error.message : "Something went wrong",
      });
    }
  }
}

export default new CategoryController();
