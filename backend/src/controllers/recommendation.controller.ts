import type { Request, Response } from "express";
import recommendationService from "../services/recommendation.service";

class RecommendationController {
  async getRecommendations(req: Request, res: Response) {
    try {
      const userId = req.user!.id;

      const recommendations =
        await recommendationService.getRecommendations(userId);

      return res.status(200).json({
        recommendations,
      });
    } catch (error) {
      return res.status(400).json({
        message:
          error instanceof Error ? error.message : "Something went wrong",
      });
    }
  }
}

export default new RecommendationController();
