import { z } from "zod";

export const createInterestSchema = z.object({
  categoryIds: z
    .array(z.number().int().positive())
    .min(1, "Select at least one category"),
});
