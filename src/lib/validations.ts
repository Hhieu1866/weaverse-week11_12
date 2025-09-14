import { z } from "zod";

export const checkoutSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  country: z.string().min(1, "Please select a country"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  address: z.string().min(1, "Address is required"),
  apartment: z.string().optional(),
  city: z.string().min(1, "City is required"),
  postalCode: z.string().optional(),
  phone: z.string().optional(),
  paymentMethod: z.enum(["credit", "paypal"]),
  cardNumber: z.string().optional(),
  expiryDate: z.string().optional(),
  securityCode: z.string().optional(),
  nameOnCard: z.string().optional(),
  rememberMe: z.boolean().optional(),
  useBillingAddress: z.boolean().optional(),
}).refine((data) => {
  if (data.paymentMethod === "credit") {
    return data.cardNumber && data.expiryDate && data.securityCode && data.nameOnCard;
  }
  return true;
}, {
  message: "Credit card details are required when credit card is selected",
  path: ["cardNumber"],
});

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;
