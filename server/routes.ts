import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertBookingInquirySchema, 
  insertContactMessageSchema, 
  insertBookingSchema
} from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes
  app.get("/api/rooms", async (req: Request, res: Response) => {
    try {
      const rooms = await storage.getRooms();
      res.json(rooms);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch rooms" });
    }
  });
  
  app.get("/api/rooms/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid room ID" });
      }
      
      const room = await storage.getRoomById(id);
      
      if (!room) {
        return res.status(404).json({ message: "Room not found" });
      }
      
      res.json(room);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch room" });
    }
  });
  
  app.post("/api/booking-inquiries", async (req: Request, res: Response) => {
    try {
      const validatedData = insertBookingInquirySchema.safeParse(req.body);
      
      if (!validatedData.success) {
        const errorMessage = fromZodError(validatedData.error).message;
        return res.status(400).json({ message: errorMessage });
      }
      
      const bookingInquiry = await storage.createBookingInquiry(validatedData.data);
      res.status(201).json(bookingInquiry);
    } catch (error) {
      res.status(500).json({ message: "Failed to create booking inquiry" });
    }
  });
  
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactMessageSchema.safeParse(req.body);
      
      if (!validatedData.success) {
        const errorMessage = fromZodError(validatedData.error).message;
        return res.status(400).json({ message: errorMessage });
      }
      
      const contactMessage = await storage.createContactMessage(validatedData.data);
      res.status(201).json(contactMessage);
    } catch (error) {
      res.status(500).json({ message: "Failed to send contact message" });
    }
  });
  
  app.get("/api/gallery", async (req: Request, res: Response) => {
    try {
      const galleryItems = await storage.getGalleryItems();
      res.json(galleryItems);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch gallery items" });
    }
  });
  
  app.get("/api/amenities", async (req: Request, res: Response) => {
    try {
      const amenities = await storage.getAmenities();
      res.json(amenities);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch amenities" });
    }
  });
  
  app.get("/api/testimonials", async (req: Request, res: Response) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch testimonials" });
    }
  });

  // Room Availability Routes
  app.get("/api/rooms/:id/availability", async (req: Request, res: Response) => {
    try {
      const roomId = parseInt(req.params.id);
      
      if (isNaN(roomId)) {
        return res.status(400).json({ message: "Invalid room ID" });
      }
      
      // Parse and validate date parameters
      const checkInQuery = req.query.checkIn as string;
      const checkOutQuery = req.query.checkOut as string;
      
      if (!checkInQuery || !checkOutQuery) {
        return res.status(400).json({ message: "Check-in and check-out dates are required" });
      }

      const checkInDate = new Date(checkInQuery);
      const checkOutDate = new Date(checkOutQuery);
      
      if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
        return res.status(400).json({ message: "Invalid date format. Use YYYY-MM-DD" });
      }
      
      if (checkInDate >= checkOutDate) {
        return res.status(400).json({ message: "Check-in date must be before check-out date" });
      }
      
      const isAvailable = await storage.checkRoomAvailability(roomId, checkInDate, checkOutDate);
      
      res.json({ isAvailable });
    } catch (error) {
      res.status(500).json({ message: "Failed to check room availability" });
    }
  });
  
  // Bookings Routes
  app.post("/api/bookings", async (req: Request, res: Response) => {
    try {
      const validatedData = insertBookingSchema.safeParse(req.body);
      
      if (!validatedData.success) {
        const errorMessage = fromZodError(validatedData.error).message;
        return res.status(400).json({ message: errorMessage });
      }
      
      // Check if room exists
      const room = await storage.getRoomById(validatedData.data.roomId);
      if (!room) {
        return res.status(404).json({ message: "Room not found" });
      }
      
      // Check if dates are valid
      const checkInDate = new Date(validatedData.data.checkInDate);
      const checkOutDate = new Date(validatedData.data.checkOutDate);
      
      if (checkInDate >= checkOutDate) {
        return res.status(400).json({ message: "Check-in date must be before check-out date" });
      }
      
      // Check if room is available for the selected dates
      const isAvailable = await storage.checkRoomAvailability(
        validatedData.data.roomId,
        checkInDate,
        checkOutDate
      );
      
      if (!isAvailable) {
        return res.status(400).json({ message: "Room is not available for the selected dates" });
      }
      
      // Create booking
      const booking = await storage.createBooking(validatedData.data);
      res.status(201).json(booking);
    } catch (error) {
      res.status(500).json({ message: "Failed to create booking" });
    }
  });
  
  app.get("/api/bookings/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid booking ID" });
      }
      
      const booking = await storage.getBookingById(id);
      
      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }
      
      res.json(booking);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch booking" });
    }
  });
  
  app.get("/api/users/:userId/bookings", async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.userId);
      
      if (isNaN(userId)) {
        return res.status(400).json({ message: "Invalid user ID" });
      }
      
      const bookings = await storage.getBookingsByUserId(userId);
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch user bookings" });
    }
  });
  
  app.patch("/api/bookings/:id/status", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid booking ID" });
      }
      
      const { status } = req.body;
      
      if (!status || !["confirmed", "cancelled", "completed"].includes(status)) {
        return res.status(400).json({ message: "Invalid status. Must be one of: confirmed, cancelled, completed" });
      }
      
      const updatedBooking = await storage.updateBookingStatus(id, status);
      
      if (!updatedBooking) {
        return res.status(404).json({ message: "Booking not found" });
      }
      
      res.json(updatedBooking);
    } catch (error) {
      res.status(500).json({ message: "Failed to update booking status" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
