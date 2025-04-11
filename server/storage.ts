import { 
  users, type User, type InsertUser,
  rooms, type Room, type InsertRoom,
  bookingInquiries, type BookingInquiry, type InsertBookingInquiry,
  contactMessages, type ContactMessage, type InsertContactMessage,
  galleryItems, type GalleryItem, type InsertGalleryItem,
  amenities, type Amenity, type InsertAmenity,
  testimonials, type Testimonial, type InsertTestimonial,
  roomAvailability, type RoomAvailability, type InsertRoomAvailability,
  bookings, type Booking, type InsertBooking,
  roomDateUnavailability, type RoomDateUnavailability, type InsertRoomDateUnavailability
} from "@shared/schema";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Room operations
  getRooms(): Promise<Room[]>;
  getRoomById(id: number): Promise<Room | undefined>;
  createRoom(room: InsertRoom): Promise<Room>;
  
  // Booking inquiry operations
  createBookingInquiry(inquiry: InsertBookingInquiry): Promise<BookingInquiry>;
  getBookingInquiries(): Promise<BookingInquiry[]>;
  
  // Contact message operations
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  
  // Gallery operations
  getGalleryItems(): Promise<GalleryItem[]>;
  createGalleryItem(item: InsertGalleryItem): Promise<GalleryItem>;
  
  // Amenity operations
  getAmenities(): Promise<Amenity[]>;
  createAmenity(amenity: InsertAmenity): Promise<Amenity>;
  
  // Testimonial operations
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  // Room Availability operations
  getRoomAvailability(roomId: number, startDate: Date, endDate: Date): Promise<RoomAvailability[]>;
  createRoomAvailability(availability: InsertRoomAvailability): Promise<RoomAvailability>;
  updateRoomAvailability(id: number, isAvailable: boolean): Promise<RoomAvailability | undefined>;
  
  // Booking operations
  createBooking(booking: InsertBooking): Promise<Booking>;
  getBookingsByUserId(userId: number): Promise<Booking[]>;
  getBookingById(id: number): Promise<Booking | undefined>;
  updateBookingStatus(id: number, status: string): Promise<Booking | undefined>;
  checkRoomAvailability(roomId: number, startDate: Date, endDate: Date): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private rooms: Map<number, Room>;
  private bookingInquiries: Map<number, BookingInquiry>;
  private contactMessages: Map<number, ContactMessage>;
  private galleryItems: Map<number, GalleryItem>;
  private amenities: Map<number, Amenity>;
  private testimonials: Map<number, Testimonial>;
  private roomAvailabilities: Map<number, RoomAvailability>;
  private bookings: Map<number, Booking>;
  private roomDateUnavailabilities: Map<string, RoomDateUnavailability>; // Using "roomId-date" as key

  currentUserId: number;
  currentRoomId: number;
  currentBookingInquiryId: number;
  currentContactMessageId: number;
  currentGalleryItemId: number;
  currentAmenityId: number;
  currentTestimonialId: number;
  currentRoomAvailabilityId: number;
  currentBookingId: number;

  constructor() {
    this.users = new Map();
    this.rooms = new Map();
    this.bookingInquiries = new Map();
    this.contactMessages = new Map();
    this.galleryItems = new Map();
    this.amenities = new Map();
    this.testimonials = new Map();
    this.roomAvailabilities = new Map();
    this.bookings = new Map();
    this.roomDateUnavailabilities = new Map();
    
    this.currentUserId = 1;
    this.currentRoomId = 1;
    this.currentBookingInquiryId = 1;
    this.currentContactMessageId = 1;
    this.currentGalleryItemId = 1;
    this.currentAmenityId = 1;
    this.currentTestimonialId = 1;
    this.currentRoomAvailabilityId = 1;
    this.currentBookingId = 1;
    
    // Initialize with sample data
    this.initSampleData();
  }

  private initSampleData() {
    // Initialize rooms
    const roomsData: InsertRoom[] = [
      {
        name: "Standard Room",
        description: "Our comfortable standard rooms offer the perfect retreat after a day of exploration.",
        price: 159,
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
        capacity: 2,
        size: 280,
        bedType: "Queen Bed",
        beds: 1,
        amenities: ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Mini Refrigerator", "Coffee Maker", "Work Desk", "Private Bathroom", "Shower"]
      },
      {
        name: "Deluxe Room",
        description: "Spacious and elegant, our deluxe rooms offer premium amenities and stunning views.",
        price: 229,
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1158&q=80",
        capacity: 2,
        size: 350,
        bedType: "King Bed",
        beds: 1,
        amenities: ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Mini Refrigerator", "Coffee Maker", "Work Desk", "Private Bathroom", "Shower", "Bathtub", "Balcony", "City View", "Room Service", "Premium Toiletries"]
      },
      {
        name: "Executive Suite",
        description: "Indulge in luxury with our executive suites featuring separate living areas and premium amenities.",
        price: 359,
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        capacity: 3,
        size: 550,
        bedType: "King + Sofa",
        beds: 2,
        amenities: ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Mini Refrigerator", "Coffee Maker", "Work Desk", "Private Bathroom", "Shower", "Bathtub", "Balcony", "Ocean View", "Room Service", "Premium Toiletries", "Separate Living Area", "Dining Area", "Mini Bar", "Sofa Bed", "Jacuzzi", "Bathrobes", "Slippers"]
      }
    ];
    
    // Create rooms and initialize their availability for the next 90 days
    roomsData.forEach(async (roomData) => {
      const room = await this.createRoom(roomData);
      
      // Create availability records for next 90 days
      const today = new Date();
      for (let i = 0; i < 90; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        
        // Randomly make some dates unavailable (for demo purposes)
        const isAvailable = Math.random() > 0.1; // 10% chance of being unavailable
        
        await this.createRoomAvailability({
          roomId: room.id,
          date: date.toISOString().split('T')[0],
          isAvailable: isAvailable,
          pricePerNight: roomData.price
        });
      }
    });
    
    // Initialize gallery items
    const galleryData: InsertGalleryItem[] = [
      {
        title: "Elegant Lobby",
        imageUrl: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
      },
      {
        title: "Presidential Suite",
        imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
      },
      {
        title: "Infinity Pool",
        imageUrl: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
      },
      {
        title: "Fine Dining",
        imageUrl: "https://images.unsplash.com/photo-1621193793262-4127d9855c91?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
      },
      {
        title: "Luxury Spa",
        imageUrl: "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
      },
      {
        title: "Rooftop Bar",
        imageUrl: "https://images.unsplash.com/photo-1605346495609-1350e39faed9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
      },
      {
        title: "Rooftop Terrace",
        imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
      },
      {
        title: "Fitness Center",
        imageUrl: "https://images.unsplash.com/photo-1631049421450-348ccd7f8949?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
      },
      {
        title: "Luxury Bathroom",
        imageUrl: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
      }
    ];
    
    galleryData.forEach(item => this.createGalleryItem(item));
    
    // Initialize amenities
    const amenitiesData: InsertAmenity[] = [
      {
        name: "Infinity Pool",
        description: "Enjoy our stunning rooftop infinity pool with panoramic views of the city skyline.",
        icon: "swimming-pool"
      },
      {
        name: "Luxury Spa",
        description: "Rejuvenate with our range of spa treatments and therapies by expert practitioners.",
        icon: "spa"
      },
      {
        name: "Fine Dining",
        description: "Savor exquisite cuisine at our award-winning restaurants and rooftop bar.",
        icon: "utensils"
      },
      {
        name: "Fitness Center",
        description: "Stay fit in our state-of-the-art fitness center with the latest equipment and personal trainers.",
        icon: "dumbbell"
      },
      {
        name: "Concierge Service",
        description: "Our dedicated concierge team is available 24/7 to assist with all your needs and requests.",
        icon: "concierge-bell"
      },
      {
        name: "Complimentary Wi-Fi",
        description: "Stay connected with high-speed Wi-Fi available throughout the hotel.",
        icon: "wifi"
      }
    ];
    
    amenitiesData.forEach(amenity => this.createAmenity(amenity));
    
    // Initialize testimonials
    const testimonialsData: InsertTestimonial[] = [
      {
        name: "Sarah J.",
        location: "New York, USA",
        content: "Our stay at Grand Azure was nothing short of magical. The staff went above and beyond to make our anniversary special. Can't wait to return!",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
      },
      {
        name: "David M.",
        location: "London, UK",
        content: "The Executive Suite exceeded all expectations. Impeccable service, stunning views, and the most comfortable bed I've ever slept in. Pure luxury!",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
      },
      {
        name: "Emily L.",
        location: "Sydney, Australia",
        content: "From the moment we arrived, we were treated like royalty. The spa treatments were divine and the dining experience at the rooftop restaurant was unforgettable.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=761&q=80"
      }
    ];
    
    testimonialsData.forEach(testimonial => this.createTestimonial(testimonial));
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Room operations
  async getRooms(): Promise<Room[]> {
    return Array.from(this.rooms.values());
  }
  
  async getRoomById(id: number): Promise<Room | undefined> {
    return this.rooms.get(id);
  }
  
  async createRoom(insertRoom: InsertRoom): Promise<Room> {
    const id = this.currentRoomId++;
    const room: Room = { 
      ...insertRoom, 
      id,
      amenities: insertRoom.amenities || [],
      beds: insertRoom.beds || 1
    };
    this.rooms.set(id, room);
    return room;
  }
  
  // Booking inquiry operations
  async createBookingInquiry(insertInquiry: InsertBookingInquiry): Promise<BookingInquiry> {
    const id = this.currentBookingInquiryId++;
    const inquiry: BookingInquiry = { 
      ...insertInquiry, 
      id, 
      createdAt: new Date() 
    };
    this.bookingInquiries.set(id, inquiry);
    return inquiry;
  }
  
  async getBookingInquiries(): Promise<BookingInquiry[]> {
    return Array.from(this.bookingInquiries.values());
  }
  
  // Contact message operations
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentContactMessageId++;
    const message: ContactMessage = { 
      ...insertMessage, 
      id, 
      createdAt: new Date() 
    };
    this.contactMessages.set(id, message);
    return message;
  }
  
  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
  
  // Gallery operations
  async getGalleryItems(): Promise<GalleryItem[]> {
    return Array.from(this.galleryItems.values());
  }
  
  async createGalleryItem(insertItem: InsertGalleryItem): Promise<GalleryItem> {
    const id = this.currentGalleryItemId++;
    const item: GalleryItem = { ...insertItem, id };
    this.galleryItems.set(id, item);
    return item;
  }
  
  // Amenity operations
  async getAmenities(): Promise<Amenity[]> {
    return Array.from(this.amenities.values());
  }
  
  async createAmenity(insertAmenity: InsertAmenity): Promise<Amenity> {
    const id = this.currentAmenityId++;
    const amenity: Amenity = { ...insertAmenity, id };
    this.amenities.set(id, amenity);
    return amenity;
  }
  
  // Testimonial operations
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }
  
  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const testimonial: Testimonial = { ...insertTestimonial, id };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  // Room Availability operations
  async getRoomAvailability(roomId: number, startDate: Date, endDate: Date): Promise<RoomAvailability[]> {
    return Array.from(this.roomAvailabilities.values()).filter(
      (availability) => {
        const availDate = new Date(availability.date);
        return (
          availability.roomId === roomId &&
          availDate >= startDate &&
          availDate <= endDate
        );
      }
    );
  }

  async createRoomAvailability(insertAvailability: InsertRoomAvailability): Promise<RoomAvailability> {
    const id = this.currentRoomAvailabilityId++;
    // Ensure required fields are present with defaults if not provided
    const availability: RoomAvailability = { 
      ...insertAvailability, 
      id,
      isAvailable: insertAvailability.isAvailable ?? true,
      pricePerNight: insertAvailability.pricePerNight ?? null
    };
    this.roomAvailabilities.set(id, availability);
    return availability;
  }

  async updateRoomAvailability(id: number, isAvailable: boolean): Promise<RoomAvailability | undefined> {
    const availability = this.roomAvailabilities.get(id);
    if (!availability) return undefined;

    const updatedAvailability: RoomAvailability = {
      ...availability,
      isAvailable
    };
    this.roomAvailabilities.set(id, updatedAvailability);
    return updatedAvailability;
  }

  // Helper function to check if a date falls within a range
  private isDateInRange(date: Date, startDate: Date, endDate: Date): boolean {
    return date >= startDate && date <= endDate;
  }

  // Helper function to get dates between start and end date
  private getDatesBetween(startDate: Date, endDate: Date): Date[] {
    const dates: Date[] = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  }

  // Booking operations
  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = this.currentBookingId++;
    const booking: Booking = {
      ...insertBooking,
      id,
      status: "confirmed",
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: insertBooking.userId ?? null,
      specialRequests: insertBooking.specialRequests ?? null
    };
    this.bookings.set(id, booking);
    
    // Mark room as unavailable for each day of the booking
    const datesBetween = this.getDatesBetween(
      new Date(booking.checkInDate),
      new Date(booking.checkOutDate)
    );
    
    datesBetween.forEach(date => {
      const dateStr = date.toISOString().split('T')[0];
      const key = `${booking.roomId}-${dateStr}`;
      const unavailability: RoomDateUnavailability = {
        roomId: booking.roomId,
        date: dateStr,
        bookingId: booking.id
      };
      this.roomDateUnavailabilities.set(key, unavailability);
    });
    
    return booking;
  }

  async getBookingsByUserId(userId: number): Promise<Booking[]> {
    return Array.from(this.bookings.values()).filter(
      (booking) => booking.userId === userId
    );
  }

  async getBookingById(id: number): Promise<Booking | undefined> {
    return this.bookings.get(id);
  }

  async updateBookingStatus(id: number, status: string): Promise<Booking | undefined> {
    const booking = this.bookings.get(id);
    if (!booking) return undefined;

    const updatedBooking: Booking = {
      ...booking,
      status,
      updatedAt: new Date()
    };
    this.bookings.set(id, updatedBooking);
    return updatedBooking;
  }

  async checkRoomAvailability(roomId: number, startDate: Date, endDate: Date): Promise<boolean> {
    // Get all dates between start and end
    const dateRange = this.getDatesBetween(startDate, endDate);
    
    // Check if any date in the range is unavailable
    for (const date of dateRange) {
      const dateString = date.toISOString().split('T')[0];
      const key = `${roomId}-${dateString}`;
      
      if (this.roomDateUnavailabilities.has(key)) {
        return false; // Room is not available for at least one day in the range
      }
    }
    
    return true; // Room is available for the entire date range
  }
}

export const storage = new MemStorage();
