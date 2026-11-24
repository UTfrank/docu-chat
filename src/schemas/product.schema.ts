import { z } from 'zod';

export const createProductSchema = z.object({
  name: z.string().trim().min(2, "Prroduct name must be at least 2 characters"),
  price: z.number().positive("Price must be a greater than zero")
});

export const updateProductSchema = createProductSchema.partial();

export type CreateProductInput = z.infer<typeof createProductSchema>;
export type UpdateProductInput = z.infer<typeof updateProductSchema>;