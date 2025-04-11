import { pgTable, text, serial, integer, boolean, date, timestamp, primaryKey } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Room Types
export const rooms = pgTable("rooms", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: integer("price").notNull(),
  image: text("image").notNull(),
  capacity: integer("capacity").notNull(),
  size: integer("size").notNull(), // in sq ft
  bedType: text("bed_type").notNull(),
  amenities: text("amenities").array().notNull().default([]),
  beds: integer("beds").notNull().default(1),
});

export const insertRoomSchema = createInsertSchema(rooms).omit({
  id: true,
});

export type InsertRoom = z.infer<typeof insertRoomSchema>;
export type Room = typeof rooms.$inferSelect;

// Booking Inquiries
export const bookingInquiries = pgTable("booking_inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  checkInDate: date("check_in_date").notNull(),
  checkOutDate: date("check_out_date").notNull(),
  guests: integer("guests").notNull(),
  roomType: text("room_type").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertBookingInquirySchema = createInsertSchema(bookingInquiries).omit({
  id: true,
  createdAt: true,
});

export type InsertBookingInquiry = z.infer<typeof insertBookingInquirySchema>;
export type BookingInquiry = typeof bookingInquiries.$inferSelect;

// Contact Form Messages
export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true,
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;

// Gallery Items
export const galleryItems = pgTable("gallery_items", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const insertGalleryItemSchema = createInsertSchema(galleryItems).omit({
  id: true,
});

export type InsertGalleryItem = z.infer<typeof insertGalleryItemSchema>;
export type GalleryItem = typeof galleryItems.$inferSelect;

// Amenities
export const amenities = pgTable("amenities", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
});

export const insertAmenitySchema = createInsertSchema(amenities).omit({
  id: true,
});

export type InsertAmenity = z.infer<typeof insertAmenitySchema>;
export type Amenity = typeof amenities.$inferSelect;

// Testimonials
export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  location: text("location").notNull(),
  content: text("content").notNull(),
  rating: integer("rating").notNull(),
  avatar: text("avatar").notNull(),
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
});

export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;

// Room Availability
export const roomAvailability = pgTable("room_availability", {
  id: serial("id").primaryKey(),
  roomId: integer("room_id").notNull().references(() => rooms.id),
  date: date("date").notNull(),
  isAvailable: boolean("is_available").notNull().default(true),
  pricePerNight: integer("price_per_night"),  // May vary from standard room price
});

export const insertRoomAvailabilitySchema = createInsertSchema(roomAvailability).omit({
  id: true,
});

export type InsertRoomAvailability = z.infer<typeof insertRoomAvailabilitySchema>;
export type RoomAvailability = typeof roomAvailability.$inferSelect;

// Room Bookings
export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  roomId: integer("room_id").notNull().references(() => rooms.id),
  userId: integer("user_id").references(() => users.id),  // Can be null for non-registered users
  guestName: text("guest_name").notNull(),
  guestEmail: text("guest_email").notNull(),
  guestPhone: text("guest_phone").notNull(),
  checkInDate: date("check_in_date").notNull(),
  checkOutDate: date("check_out_date").notNull(),
  numberOfGuests: integer("number_of_guests").notNull(),
  totalPrice: integer("total_price").notNull(),  // Stored in cents
  status: text("status").notNull().default("confirmed"),  // confirmed, cancelled, completed
  specialRequests: text("special_requests"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertBookingSchema = createInsertSchema(bookings).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  status: true,
});

export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type Booking = typeof bookings.$inferSelect;

// Date-specific room unavailability due to bookings
export const roomDateUnavailability = pgTable("room_date_unavailability", {
  roomId: integer("room_id").notNull().references(() => rooms.id),
  date: date("date").notNull(),
  bookingId: integer("booking_id").notNull().references(() => bookings.id),
}, (table) => {
  return {
    pk: primaryKey({ columns: [table.roomId, table.date] }),
  }
});

export const insertRoomDateUnavailabilitySchema = createInsertSchema(roomDateUnavailability);

export type InsertRoomDateUnavailability = z.infer<typeof insertRoomDateUnavailabilitySchema>;
export type RoomDateUnavailability = typeof roomDateUnavailability.$inferSelect;
