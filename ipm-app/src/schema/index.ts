import { z } from 'zod';

export const FormSchema = z.object({
  name: z.string().min(2, {
    message: 'name must be at least 2 characters.'
  }),
  email: z.string().email().min(2, {
    message: 'e-mail must be at least 2 characters.'
  }),
  message: z.string().min(2, {
    message: 'message must be at least 2 characters.'
  })
});
