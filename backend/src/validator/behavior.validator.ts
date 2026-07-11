import { z } from "zod";

export const createBehaviorSchema = z.object({
  adId: z.number().int().positive(),

  action: z.enum(["VIEW", "CLICK", "LIKE", "COMMENT", "WATCH"]),

  watchTime: z.number().int().positive().optional(),
});
