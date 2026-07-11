import type { Request, Response } from "express";
import authService from "../services/auth.service";

class AuthController {
  async register(req: Request, res: Response) {
    try {
      const data = req.body;

      const result = await authService.register(data);

      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({
        message:
          error instanceof Error ? error.message : "Something went wrong",
      });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const data = req.body;

      const result = await authService.login(data);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(401).json({
        message:
          error instanceof Error ? error.message : "Something went wrong",
      });
    }
  }
  async profile(req: Request, res: Response) {
    try {
      const userId = req.user.id;

      const result = await authService.profile(userId);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({
        message:
          error instanceof Error ? error.message : "Something went wrong",
      });
    }
  }
}

export default new AuthController();
