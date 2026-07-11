import { z } from "zod";

export const createCategorySchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Category name is too short")
    .max(50, "Category name is too long"),
});
