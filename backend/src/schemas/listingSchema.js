import { z } from "zod";

export const listingSchema = z.object({
  listing: z.object({
    title: z
      .string()
      .trim()
      .min(3, "Title must be at least 3 characters long")
      .max(50, "Title must be at most 50 characters long"),

    description: z
      .string()
      .trim()
      .min(3, "Description must be at least 3 characters long")
      .max(500, "Description must be at most 500 characters long"),

    price: z.coerce
      .number()
      .min(1, "Price must be greater than 0"),

    location: z
      .string()
      .trim()
      .min(3, "Location must be at least 3 characters long")
      .max(50, "Location must be at most 50 characters long"),

    country: z
      .string()
      .trim()
      .min(3, "Country must be at least 3 characters long")
      .max(50, "Country must be at most 50 characters long"),
  }),
});