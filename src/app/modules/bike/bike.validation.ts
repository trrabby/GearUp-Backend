import { z } from "zod";

export const createBikeZodSchema = z.object({
  body: z.object({
    brand: z.string().min(1, "Brand is required"),
    model: z.string().min(1, "Model is required"),
    year: z
      .number()
      .int()
      .min(1900, "Year must be a valid number")
      .max(new Date().getFullYear()),
    customerId: z.string().uuid("Invalid customer ID"),
  }),
});
