import type { Request, Response } from "express";
import interestService from "../services/interest.service.js";
import { createInterestSchema } from "../validator/interest.validator.js";

class InterestController {
  async save(req: Request, res: Response) {
    try {
      const userId = req.user!.id;

      const data = createInterestSchema.parse(req.body);

      const interests = await interestService.save(userId, data);

      return res.status(200).json({
        message: "Interests saved successfully",
        interests,
      });
    } catch (error) {
      return res.status(400).json({
        message:
          error instanceof Error ? error.message : "Something went wrong",
      });
    }
  }
}

export default new InterestController();
