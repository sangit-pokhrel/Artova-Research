import { z } from "zod";

const nepalPhoneRegex = /^9[678]\d{8}$/;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Full name is required.")
    .refine(
      (value) => value.split(/\s+/).length >= 2,
      "Please enter your full name."
    ),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  phone: z
    .string()
    .trim()
    .regex(
      nepalPhoneRegex,
      "Please enter a valid Nepal mobile number."
    ),

  subject: z
    .string()
    .trim()
    .min(1, "Research subject is required.")
    .max(100, "Research subject is too long."),

  message: z
    .string()
    .trim()
    .min(1, "Research description is required.")
    .refine(
      (value) => value.split(/\s+/).filter(Boolean).length <= 100,
      "Research description must not exceed 100 words."
    ),
});

export type ContactFormData = z.infer<typeof contactSchema>;