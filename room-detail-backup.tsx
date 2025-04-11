import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  CalendarDays, 
  Users, 
  BedDouble, 
  ArrowLeft, 
  Wifi, 
  Coffee, 
  Bath, 
  Tv,
  MapPin,
  Square,
  Star,
  Check,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import RoomBookingForm from "@/components/room-booking-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { apiRequest } from "@/lib/queryClient";

// Define a TypeScript interface for the Room type
interface RoomDetails {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  image: string;
  beds: number;
  capacity: number;
  size: number;
  price: number;
  bedType: string;
  amenities: string[];
  available: boolean;
}

const RoomDetail = () => {
  const params = useParams();
  const id = params?.id;
  const roomId = id ? parseInt(id) : 1; // Default to 1 if no ID is provided
  const [imageIndex, setImageIndex] = useState(0);
  
  const { data: room, isLoading, error } = useQuery({
    queryKey: ['/api/rooms', roomId],
    queryFn: async () => {
      try {
        const response = await fetch(`/api/rooms/${roomId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch room details');
        }
        const data = await response.json();
        return data as RoomDetails;
      } catch (err) {
        console.error('Error fetching room details:', err);
        throw err;
      }
    },
  });
  
  // Reset image index when room changes
  useEffect(() => {
    setImageIndex(0);
  }, [roomId]);
  
  if (isLoading) {
    return (
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="h-6 bg-gray-200 rounded w-1/3"></div>
            <div className="h-96 bg-gray-200 rounded"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-2 space-y-4">
                <div className="h-8 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
              <div className="h-64 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (error || !room) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-2xl font-semibold mb-4">Room Not Found</h1>
        <p className="mb-8 text-neutral-600">The room you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/rooms">Back to Rooms</Link>
        </Button>
      </div>
    );
  }
  
  // Create additional room images based on the main image
  const roomImages = [
    room.imageUrl,
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", // Luxury bathroom
    "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", // Bedroom with view
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", // Room service
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", // Sitting area
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Hotel exterior
  ];
  
  const amenities = [
    { name: "High-Speed WiFi", icon: <Wifi className="w-5 h-5" /> },
    { name: "Room Service", icon: <Coffee className="w-5 h-5" /> },
    { name: "Luxury Bathroom", icon: <Bath className="w-5 h-5" /> },
    { name: "Smart TV", icon: <Tv className="w-5 h-5" /> },
    { name: "Central Location", icon: <MapPin className="w-5 h-5" /> },
    { name: `${room.size} sq ft`, icon: <Square className="w-5 h-5" /> },
  ];
  
  const policies = [
    "Check-in: 3:00 PM - 12:00 AM",
    "Check-out: 11:00 AM",
    "No smoking",
    "No pets allowed",
    "No parties or events",
    "Government-issued ID required for check-in"
  ];
  
  return (
    <div className="container mx-auto py-12 px-4 max-w-7xl">
      {/* Breadcrumb Navigation */}
      <div className="mb-8">
        <Link href="/rooms" className="inline-flex items-center text-primary hover:underline font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to All Rooms
        </Link>
      </div>
      
      {/* Room Title and Badges */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">{room.name}</h1>
          <div className="flex flex-wrap gap-2 items-center text-neutral-600">
            <span className="inline-flex items-center">
              <BedDouble className="w-5 h-5 mr-2" /> {room.beds} Beds
            </span>
            <span className="inline-flex items-center ml-4">
              <Users className="w-5 h-5 mr-2" /> Up to {room.capacity} Guests
            </span>
            <span className="inline-flex items-center ml-4">
              <Square className="w-5 h-5 mr-2" /> {room.size} sq ft
            </span>
            <span className="inline-flex items-center ml-4">
              <Star className="w-5 h-5 mr-2 text-amber-500" /> 4.9 (128 reviews)
            </span>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <Badge variant="outline" className="text-lg font-medium py-2 px-4 border-2 bg-gradient-to-r from-amber-600 to-yellow-400 text-white border-none">
            ${room.price ? room.price.toFixed(2) : '0.00'} <span className="text-sm">/night</span>
          </Badge>
        </div>
      </div>
      
      {/* Room Images */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-8 md:mb-12">
        <div className="lg:col-span-8 rounded-lg overflow-hidden h-64 sm:h-80 md:h-96 relative">
          <img 
            src={roomImages[imageIndex]} 
            alt={`${room.name} - Image ${imageIndex + 1}`} 
            className="w-full h-full object-cover"
          />
          
          {/* Navigation Arrows */}
          <div className="absolute inset-0 flex items-center justify-between p-2 sm:p-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-black/30 text-white hover:bg-black/50 hover:text-white transform transition-transform duration-200 hover:scale-110"
              onClick={() => setImageIndex((prev) => (prev === 0 ? roomImages.length - 1 : prev - 1))}
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-black/30 text-white hover:bg-black/50 hover:text-white transform transition-transform duration-200 hover:scale-110"
              onClick={() => setImageIndex((prev) => (prev === roomImages.length - 1 ? 0 : prev + 1))}
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
          
          {/* Image Counter */}
          <div className="absolute bottom-3 right-3 bg-black/50 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm">
            {imageIndex + 1} / {roomImages.length}
          </div>
        </div>
        <div className="lg:col-span-4 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4 mt-2 md:mt-0">
          {roomImages.map((image, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden h-20 sm:h-28 md:h-44 cursor-pointer ${
                index === imageIndex ? 'ring-2 md:ring-4 ring-primary ring-offset-1 md:ring-offset-2' : ''
              } hover:opacity-90 transition-all duration-200 transform hover:scale-105`}
              onClick={() => setImageIndex(index)}
            >
              <img 
                src={image} 
                alt={`${room.name} - Thumbnail ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Left Column - Room Details */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full flex justify-start overflow-x-auto mb-4 sm:mb-6">
              <TabsTrigger value="overview" className="text-sm sm:text-base">Overview</TabsTrigger>
              <TabsTrigger value="amenities" className="text-sm sm:text-base">Amenities</TabsTrigger>
              <TabsTrigger value="policies" className="text-sm sm:text-base">Policies</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold mb-4">Room Description</h2>
                <p className="text-neutral-700 leading-relaxed">
                  {room.description}
                </p>
                <p className="text-neutral-700 leading-relaxed mt-4">
                  Experience unparalleled luxury in our meticulously designed {room.name.toLowerCase()}. 
                  With stunning views and premium furnishings, this space offers the perfect retreat 
                  whether you're traveling for business or pleasure. The thoughtfully appointed 
                  room features high-end amenities and elegant décor to ensure your stay is both 
                  comfortable and memorable.
                </p>
              </div>
              
              <div>
                <h3 className="font-serif text-xl font-bold mb-4">Room Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>{room.beds} {room.beds > 1 ? 'beds' : 'bed'} with premium linens</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Dedicated workspace</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>High-speed WiFi</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>55-inch Smart TV</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Minibar with premium selections</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Luxurious bathroom amenities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Climate control system</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>Room service available</span>
                  </li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="amenities" className="space-y-8">
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Room Amenities</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-6">
                  {amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-neutral-50 hover:bg-neutral-100 p-2 sm:p-3 rounded-lg transition-colors duration-200">
                      <div className="p-2 sm:p-3 bg-white shadow-sm rounded-full">
                        {amenity.icon}
                      </div>
                      <span className="font-medium text-sm sm:text-base">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Hotel Amenities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-neutral-50 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-medium text-base sm:text-lg mb-3 flex items-center">
                      <Bath className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2" />
                      Wellness
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start bg-white p-2 rounded-md">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 mt-0.5" />
                        <span className="text-sm sm:text-base">Full-service spa</span>
                      </li>
                      <li className="flex items-start bg-white p-2 rounded-md">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 mt-0.5" />
                        <span className="text-sm sm:text-base">Fitness center with trainers</span>
                      </li>
                      <li className="flex items-start bg-white p-2 rounded-md">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 mt-0.5" />
                        <span className="text-sm sm:text-base">Indoor and outdoor pools</span>
                      </li>
                      <li className="flex items-start bg-white p-2 rounded-md">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 mt-0.5" />
                        <span className="text-sm sm:text-base">Sauna and steam rooms</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-neutral-50 p-3 sm:p-4 rounded-lg">
                    <h3 className="font-medium text-base sm:text-lg mb-3 flex items-center">
                      <Coffee className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2" />
                      Dining
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start bg-white p-2 rounded-md">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 mt-0.5" />
                        <span className="text-sm sm:text-base">24-hour room service</span>
                      </li>
                      <li className="flex items-start bg-white p-2 rounded-md">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 mt-0.5" />
                        <span className="text-sm sm:text-base">Michelin-star restaurant</span>
                      </li>
                      <li className="flex items-start bg-white p-2 rounded-md">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 mt-0.5" />
                        <span className="text-sm sm:text-base">Rooftop bar with city views</span>
                      </li>
                      <li className="flex items-start bg-white p-2 rounded-md">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 mt-0.5" />
                        <span className="text-sm sm:text-base">Café and bakery</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="policies" className="space-y-6">
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Room Policies</h2>
                <div className="bg-neutral-50 p-3 sm:p-4 rounded-lg">
                  <ul className="space-y-2">
                    {policies.map((policy, index) => (
                      <li key={index} className="flex items-start bg-white p-2 rounded-md">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 mt-0.5" />
                        <span className="text-sm sm:text-base">{policy}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-serif text-xl font-bold mb-3 sm:mb-4 flex items-center">
                  <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2" />
                  Cancellation Policy
                </h3>
                <div className="bg-neutral-50 p-3 sm:p-4 rounded-lg">
                  <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                    Reservations can be cancelled free of charge up to 48 hours before the scheduled check-in date.
                    For cancellations made within 48 hours of the check-in date, a fee equivalent to one night's stay will be charged.
                    No-shows will be charged the full amount of the reservation.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-8 sm:mt-12">
            <h3 className="font-serif text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-primary" />
              Location
            </h3>
            <div className="rounded-lg overflow-hidden h-64 sm:h-80 md:h-96">
              <img 
                src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="1 Hotel Central Park NYC Location" 
                className="w-full h-full object-cover"
              />
              <div className="mt-4 space-y-1">
                <p className="font-medium flex items-center">
                  <Star className="w-4 h-4 mr-2 text-amber-500" />
                  1 Hotel Central Park
                </p>
                <p className="text-sm text-neutral-600">1414 6th Avenue, New York, NY 10019</p>
                <p className="text-sm text-neutral-600">Overlooking Central Park</p>
                <p className="mt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs sm:text-sm mt-1 border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    View on Map
                  </Button>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Booking Form - Appears between tabs and location on small screens */}
        <div className="block lg:hidden mt-8 mb-12">
          <Card className="border-0 shadow-lg">
            <CardContent id="booking" className="p-4 sm:p-6">
              <h3 className="font-serif text-lg sm:text-xl font-bold mb-3 flex items-center">
                <CalendarDays className="w-5 h-5 mr-2 text-primary" />
                Book This Room
              </h3>
              <RoomBookingForm 
                roomId={roomId} 
                roomName={room.name} 
                pricePerNight={room.pricePerNight} 
                maxGuests={room.capacity} 
              />
            </CardContent>
          </Card>
        </div>
        
        {/* Right Column - Booking Form (Desktop) */}
        <div className="hidden lg:block lg:col-span-1">
          <Card className="sticky top-24 shadow-lg border-0">
            <CardContent id="booking-desktop" className="p-4 sm:p-6">
              <h3 className="font-serif text-xl font-bold mb-4">Book This Room</h3>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <CalendarDays className="w-5 h-5 mr-2 text-primary" />
                  <span className="text-sm text-neutral-600">Availability Calendar</span>
                </div>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                  View Calendar
                </Button>
              </div>
              
              <RoomBookingForm 
                roomId={roomId} 
                roomName={room.name} 
                pricePerNight={room.pricePerNight} 
                maxGuests={room.capacity} 
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;