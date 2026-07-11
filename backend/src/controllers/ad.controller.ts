import type { Request, Response } from "express";
import adService from "../services/ad.service";
import { createAdSchema, updateAdSchema } from "../validator/ad.validator";

class AdController {
  async create(req: Request, res: Response) {
    try {
      const data = createAdSchema.parse(req.body);

      const ad = await adService.create(data);

      return res.status(201).json({
        message: "Ad created successfully",
        ad,
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
      const ads = await adService.getAll();

      return res.status(200).json(ads);
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

      const ad = await adService.getById(id);

      return res.status(200).json(ad);
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

      const data = updateAdSchema.parse(req.body);

      const ad = await adService.update(id, data);

      return res.status(200).json({
        message: "Ad updated successfully",
        ad,
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

      await adService.delete(id);

      return res.status(200).json({
        message: "Ad deleted successfully",
      });
    } catch (error) {
      return res.status(400).json({
        message:
          error instanceof Error ? error.message : "Something went wrong",
      });
    }
  }
}

export default new AdController();
