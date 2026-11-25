import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string().trim().min(2, "User's name must be at least 2 characters long"),
  email: z.email("Email address is not valid"),
})

export const updateUserSchema = createUserSchema.partial();

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;