import { z } from "zod";

export const insertContactSchema = z.object({
  name: z.string().min(1, "Name is required").max(255),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  serviceInterest: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type InsertContact = z.infer<typeof insertContactSchema>;

export interface Testimonial {
  id: string;
  name: string;
  service: string;
  rating: number;
  message: string;
  date: string;
}
