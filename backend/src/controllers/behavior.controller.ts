import type { Request, Response } from "express";
import behaviorService from "../services/behavior.service";
import { createBehaviorSchema } from "../validator/behavior.validator";

class BehaviorController {
  async create(req: Request, res: Response) {
    try {
      const userId = req.user!.id;

      const data = createBehaviorSchema.parse(req.body);

      const behavior = await behaviorService.create(userId, data);

      return res.status(201).json({
        message: "Behavior recorded successfully",
        behavior,
      });
    } catch (error) {
      return res.status(400).json({
        message:
          error instanceof Error ? error.message : "Something went wrong",
      });
    }
  }

  async getMyBehaviors(req: Request, res: Response) {
    try {
      const userId = req.user!.id;

      const behaviors = await behaviorService.getByUser(userId);

      return res.status(200).json(behaviors);
    } catch (error) {
      return res.status(400).json({
        message:
          error instanceof Error ? error.message : "Something went wrong",
      });
    }
  }

  async getByAd(req: Request, res: Response) {
    try {
      const adId = Number(req.params.id);

      const behaviors = await behaviorService.getByAd(adId);

      return res.status(200).json(behaviors);
    } catch (error) {
      return res.status(400).json({
        message:
          error instanceof Error ? error.message : "Something went wrong",
      });
    }
  }
}

export default new BehaviorController();
