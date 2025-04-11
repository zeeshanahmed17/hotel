import { useState, useEffect, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent } from "@/components/ui/card";
import { format, addDays, differenceInDays } from "date-fns";
import { CalendarIcon, Users, Phone, Mail, User, CreditCard, Check, X } from "lucide-react";
import { z } from "zod";
import { GUEST_OPTIONS } from "@/lib/constants";
import { useAuth } from "@/lib/auth-context";

// Define a schema for the booking form
const roomBookingSchema = z.object({
  guestName: z.string().min(2, "Name must be at least 2 characters"),
  guestEmail: z.string().email("Please enter a valid email address"),
  guestPhone: z.string().min(10, "Please enter a valid phone number"),
  checkInDate: z.date({
    required_error: "Check-in date is required",
  }),
  checkOutDate: z.date({
    required_error: "Check-out date is required",
  }),
  numberOfGuests: z.string().min(1, "Please select the number of guests"),
  specialRequests: z.string().optional(),
});

type RoomBookingFormValues = z.infer<typeof roomBookingSchema>;

interface RoomBookingFormProps {
  roomId: number;
  roomName: string;
  pricePerNight: number;
  maxGuests: number;
  className?: string;
}

const RoomBookingForm = ({ 
  roomId, 
  roomName, 
  pricePerNight,
  maxGuests,
  className 
}: RoomBookingFormProps) => {
  const { toast } = useToast();
  const { currentUser } = useAuth();
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [totalNights, setTotalNights] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  
  // Refs for form animations
  const availabilityRef = useRef<HTMLDivElement>(null);
  const formDetailsRef = useRef<HTMLDivElement>(null);

  const form = useForm<RoomBookingFormValues>({
    resolver: zodResolver(roomBookingSchema),
    defaultValues: {
      guestName: currentUser?.displayName || "",
      guestEmail: currentUser?.email || "",
      guestPhone: "",
      checkInDate: undefined,
      checkOutDate: undefined,
      numberOfGuests: "",
      specialRequests: "",
    }
  });

  // Watch check-in and check-out dates to recalculate total
  const checkInDate = form.watch("checkInDate");
  const checkOutDate = form.watch("checkOutDate");

  // Calculate total nights and price whenever dates change
  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const nights = differenceInDays(checkOutDate, checkInDate);
      setTotalNights(nights);
      setTotalPrice(nights * (pricePerNight || 0));
    } else {
      setTotalNights(0);
      setTotalPrice(0);
    }
  }, [checkInDate, checkOutDate, pricePerNight]);

  // Mutation for checking room availability
  const checkAvailabilityMutation = useMutation({
    mutationFn: async () => {
      if (!checkInDate || !checkOutDate) return;
      
      setIsCheckingAvailability(true);
      try {
        const response = await apiRequest(
          "GET", 
          `/api/rooms/${roomId}/availability?checkIn=${checkInDate.toISOString()}&checkOut=${checkOutDate.toISOString()}`
        );
        const data = await response.json();
        setIsAvailable(data.isAvailable);
        return data.isAvailable;
      } finally {
        setIsCheckingAvailability(false);
      }
    },
  });

  // Mutation for creating a booking
  const bookingMutation = useMutation({
    mutationFn: async (values: RoomBookingFormValues) => {
      const bookingData = {
        roomId,
        userId: currentUser?.uid ? parseInt(currentUser.uid) : null,
        guestName: values.guestName,
        guestEmail: values.guestEmail,
        guestPhone: values.guestPhone,
        checkInDate: values.checkInDate.toISOString().split('T')[0],
        checkOutDate: values.checkOutDate.toISOString().split('T')[0],
        numberOfGuests: parseInt(values.numberOfGuests),
        totalPrice: totalPrice ? Math.round(totalPrice * 100) : 0, // Convert to cents for DB storage
        specialRequests: values.specialRequests || null,
      };
      
      return await apiRequest("POST", "/api/bookings", bookingData);
    },
    onSuccess: async (response) => {
      const booking = await response.json();
      toast({
        title: "Booking Confirmed",
        description: `Your stay at ${roomName} has been booked successfully. Booking #${booking.id}`,
        variant: "default",
      });
      form.reset();
      setIsAvailable(null);
      // Invalidate availability queries to refresh data
      queryClient.invalidateQueries({ queryKey: [`/api/rooms/${roomId}/availability`] });
    },
    onError: (error) => {
      toast({
        title: "Booking Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  });

  // Function to check availability when user clicks the check button
  const handleCheckAvailability = () => {
    if (!checkInDate || !checkOutDate) {
      toast({
        title: "Missing Dates",
        description: "Please select both check-in and check-out dates",
        variant: "destructive",
      });
      return;
    }
    
    checkAvailabilityMutation.mutate();
  };

  // Function to submit the form and create booking
  function onSubmit(values: RoomBookingFormValues) {
    if (!isAvailable) {
      toast({
        title: "Room Not Available",
        description: "The room is not available for the selected dates. Please choose different dates.",
        variant: "destructive",
      });
      return;
    }
    
    bookingMutation.mutate(values);
  }

  // Filtered guest options based on max occupancy
  const filteredGuestOptions = GUEST_OPTIONS.filter(option => 
    parseInt(option.value) <= maxGuests
  );

  return (
    <Card className={`${className} shadow-xl border-0`}>
      <CardContent className="p-8 sm:p-10">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl font-bold mb-3 bg-gradient-to-r from-amber-600 to-yellow-400 bg-clip-text text-transparent">
            Book Your Stay
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-neutral-700">Reserve {roomName} directly for the best rates</p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pricing and availability display */}
            <div className="md:col-span-2">
              <div className="bg-neutral-50 p-4 rounded-md flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900">${pricePerNight ? pricePerNight.toFixed(2) : '0.00'} <span className="text-sm text-neutral-500">per night</span></h3>
                    <p className="text-sm text-neutral-600">Exclusive rate for online bookings</p>
                  </div>
                </div>
                
                {isAvailable !== null && (
                  <div className={`flex items-center form-fade-in ${isAvailable ? 'form-success-pulse' : 'form-error-shake'}`}>
                    {isAvailable ? (
                      <>
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-green-700 font-medium">Available for your dates</span>
                      </>
                    ) : (
                      <>
                        <X className="h-5 w-5 text-red-500 mr-2" />
                        <span className="text-red-700 font-medium">Not available for selected dates</span>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
            
            <FormField
              control={form.control}
              name="checkInDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="font-medium mb-2">Check-in Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={`w-full pl-3 text-left font-normal h-12 ${!field.value && "text-muted-foreground"} form-input-hover-effect form-focus-highlight`}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Select check-in date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(date) => {
                          field.onChange(date);
                          setIsAvailable(null); // Reset availability when dates change
                        }}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className="rounded-md border shadow-md"
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="checkOutDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="font-medium mb-2">Check-out Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={`w-full pl-3 text-left font-normal h-12 ${!field.value && "text-muted-foreground"} form-input-hover-effect form-focus-highlight`}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Select check-out date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(date) => {
                          field.onChange(date);
                          setIsAvailable(null); // Reset availability when dates change
                        }}
                        disabled={(date) => 
                          date < addDays(new Date(), 1) || 
                          (form.getValues().checkInDate && date <= form.getValues().checkInDate)
                        }
                        initialFocus
                        className="rounded-md border shadow-md"
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="numberOfGuests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium mb-2">Guests</FormLabel>
                  <Select onValueChange={(value) => {
                    field.onChange(value);
                    setIsAvailable(null); // Reset availability when guest count changes
                  }} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12 flex items-center form-input-hover-effect form-focus-highlight">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-neutral-500" />
                          <SelectValue placeholder="Select number of guests" />
                        </div>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {filteredGuestOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="md:col-span-2">
              <div className="flex justify-between mb-2">
                <Button 
                  type="button" 
                  onClick={handleCheckAvailability}
                  className="w-full py-6 bg-amber-100 hover:bg-amber-200 text-amber-900 font-medium button-hover-glow" 
                  disabled={isCheckingAvailability || !checkInDate || !checkOutDate}
                >
                  {isCheckingAvailability ? "Checking..." : "Check Availability"}
                </Button>
              </div>
            </div>
            
            {/* Only show the booking form if availability has been checked and is available */}
            {isAvailable && (
              <>
                <div ref={availabilityRef} className="md:col-span-2 p-4 bg-green-50 border border-green-100 rounded-md mb-4 form-slide-down">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-green-800">Room Available!</p>
                      <p className="text-sm text-green-700">{totalNights} {totalNights === 1 ? 'night' : 'nights'} · ${pricePerNight ? pricePerNight.toFixed(2) : '0.00'} per night</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-green-700">Total</p>
                      <p className="font-bold text-green-800 text-xl">${totalPrice ? totalPrice.toFixed(2) : '0.00'}</p>
                    </div>
                  </div>
                </div>
                
                <FormField
                  control={form.control}
                  name="guestName"
                  render={({ field }) => (
                    <FormItem className="form-slide-up" style={{ animationDelay: '50ms' }}>
                      <FormLabel className="font-medium mb-2">Full Name</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-5 w-5 text-neutral-500" />
                          <Input className="pl-10 h-12 form-input-hover-effect form-focus-highlight" placeholder="John Doe" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="guestEmail"
                  render={({ field }) => (
                    <FormItem className="form-slide-up" style={{ animationDelay: '100ms' }}>
                      <FormLabel className="font-medium mb-2">Email Address</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-5 w-5 text-neutral-500" />
                          <Input className="pl-10 h-12 form-input-hover-effect form-focus-highlight" type="email" placeholder="your.email@example.com" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="guestPhone"
                  render={({ field }) => (
                    <FormItem className="form-slide-up" style={{ animationDelay: '150ms' }}>
                      <FormLabel className="font-medium mb-2">Phone Number</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-5 w-5 text-neutral-500" />
                          <Input className="pl-10 h-12 form-input-hover-effect form-focus-highlight" placeholder="+1 (555) 123-4567" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="specialRequests"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2 form-slide-up" style={{ animationDelay: '200ms' }}>
                      <FormLabel className="font-medium mb-2">Special Requests (Optional)</FormLabel>
                      <FormControl>
                        <Input className="h-12 form-input-hover-effect form-focus-highlight" placeholder="Any special requests or preferences?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="md:col-span-2 mt-4 form-slide-up" style={{ animationDelay: '250ms' }}>
                  <Button 
                    type="submit" 
                    className="w-full py-7 text-lg bg-gradient-to-r from-amber-600 to-yellow-400 hover:from-amber-700 hover:to-amber-500 text-white font-medium shadow-lg button-hover-glow form-success-pulse" 
                    disabled={bookingMutation.isPending}
                  >
                    {bookingMutation.isPending ? "Processing Your Booking..." : `Confirm Booking - $${totalPrice ? totalPrice.toFixed(2) : '0.00'}`}
                  </Button>
                  
                  <p className="text-center text-xs text-neutral-500 mt-4">
                    By booking, you agree to our terms and conditions.
                  </p>
                </div>
              </>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RoomBookingForm;