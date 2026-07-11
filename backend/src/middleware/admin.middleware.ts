import type { Request, Response, NextFunction } from "express";

const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({
      message: "Access denied",
    });
  }

  next();
};

export default adminMiddleware;
