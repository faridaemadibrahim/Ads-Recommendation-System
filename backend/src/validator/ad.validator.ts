import { z } from "zod";

export const createAdSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title must be less than 100 characters"),

  description: z
    .string()
    .trim()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must be less than 500 characters"),

  url: z.url("Invalid URL"),

  type: z.enum(["YOUTUBE", "FACEBOOK", "IMAGE", "VIDEO"], {
    message: "Invalid ad type",
  }),

  categoryId: z
    .number()
    .int("Category ID must be an integer")
    .positive("Category ID must be positive"),
});

export const updateAdSchema = createAdSchema.partial();
