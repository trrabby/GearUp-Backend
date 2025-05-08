import { z } from "zod";

export const createCustomerZodSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number can't be longer than 15 digits"),
  }),
});

export const updateCustomerZodSchema = z.object({
  body: z.object({
    name: z.string().min(1).optional(),
    phone: z
      .string()
      .min(11, { message: "Phone number must be at least 11 characters long" })
      .optional(),
  }),
});
