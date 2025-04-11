import { z } from "zod";

// Booking inquiry form validator
export const bookingInquirySchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  checkInDate: z.date({ 
    required_error: "Check-in date is required",
    invalid_type_error: "Check-in date is required"
  }),
  checkOutDate: z.date({ 
    required_error: "Check-out date is required",
    invalid_type_error: "Check-out date is required"
  }),
  guests: z.string().min(1, { message: "Please select number of guests" }),
  roomType: z.string().min(1, { message: "Please select a room type" })
}).refine(data => {
  return data.checkOutDate > data.checkInDate;
}, {
  message: "Check-out date must be after check-in date",
  path: ["checkOutDate"]
});

export type BookingInquiryFormValues = z.infer<typeof bookingInquirySchema>;

// Contact form validator
export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
