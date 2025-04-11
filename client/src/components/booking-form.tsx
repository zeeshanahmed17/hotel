import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
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
import { format, differenceInDays } from "date-fns";
import { CalendarIcon, Users, Bed, Mail, User, Check, X } from "lucide-react";
import { bookingInquirySchema, type BookingInquiryFormValues } from "@/lib/validators";
import { ROOM_TYPES, GUEST_OPTIONS } from "@/lib/constants";
import { Link } from "wouter";

interface BookingFormProps {
  defaultRoomType?: string;
  className?: string;
}

const BookingForm = ({ defaultRoomType, className }: BookingFormProps) => {
  const { toast } = useToast();
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);
  const [recommendedRoomId, setRecommendedRoomId] = useState<number | null>(null);
  const [totalNights, setTotalNights] = useState(0);

  const form = useForm<BookingInquiryFormValues>({
    resolver: zodResolver(bookingInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      checkInDate: undefined,
      checkOutDate: undefined,
      guests: "",
      roomType: defaultRoomType || ""
    }
  });

  // Watch check-in and check-out dates to calculate total nights
  const checkInDate = form.watch("checkInDate");
  const checkOutDate = form.watch("checkOutDate");
  const roomType = form.watch("roomType");
  
  // Calculate total nights whenever dates change
  if (checkInDate && checkOutDate) {
    const nights = differenceInDays(checkOutDate, checkInDate);
    if (nights !== totalNights) {
      setTotalNights(nights);
    }
  }

  // Reset availability when relevant fields change
  if (isAvailable !== null && (form.formState.isDirty || form.formState.isSubmitSuccessful)) {
    setIsAvailable(null);
    setRecommendedRoomId(null);
  }

  // Mutation for checking availability
  const checkAvailabilityMutation = useMutation({
    mutationFn: async (values: BookingInquiryFormValues) => {
      setIsCheckingAvailability(true);
      
      try {
        // This is a simplified check - in a real implementation you would query the API
        // to check availability for the specific room type and dates
        let roomId = 0;
        
        // Find the room ID based on room type
        if (roomType.toLowerCase().includes("standard")) {
          roomId = 1;
        } else if (roomType.toLowerCase().includes("deluxe")) {
          roomId = 2;
        } else if (roomType.toLowerCase().includes("executive")) {
          roomId = 3;
        } else if (roomType.toLowerCase().includes("presidential")) {
          roomId = 4;
        }
        
        // If we found a room, check its availability
        if (roomId > 0) {
          const response = await apiRequest(
            "GET", 
            `/api/rooms/${roomId}/availability?checkIn=${values.checkInDate.toISOString()}&checkOut=${values.checkOutDate.toISOString()}`
          );
          const data = await response.json();
          setIsAvailable(data.isAvailable);
          if (data.isAvailable) {
            setRecommendedRoomId(roomId);
          }
          return data.isAvailable;
        } else {
          // If no specific room type was detected, assume all rooms are available
          // In a real implementation, you would query for available rooms
          setIsAvailable(true);
          setRecommendedRoomId(1); // Default to first room as an example
          return true;
        }
      } catch (error) {
        console.error("Error checking availability:", error);
        toast({
          title: "Error Checking Availability",
          description: "There was a problem checking room availability. Please try again.",
          variant: "destructive",
        });
        return false;
      } finally {
        setIsCheckingAvailability(false);
      }
    }
  });
  
  // Mutation for submitting an inquiry
  const inquiryMutation = useMutation({
    mutationFn: async (values: BookingInquiryFormValues) => {
      const formattedValues = {
        ...values,
        checkInDate: values.checkInDate.toISOString(),
        checkOutDate: values.checkOutDate.toISOString()
      };
      
      return await apiRequest("POST", "/api/booking-inquiries", formattedValues);
    },
    onSuccess: () => {
      toast({
        title: "Booking Inquiry Submitted",
        description: "We'll get back to you shortly to confirm your reservation.",
        variant: "default",
      });
      form.reset();
      setIsAvailable(null);
      setRecommendedRoomId(null);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit booking inquiry. Please try again.",
        variant: "destructive",
      });
    }
  });

  function onSubmit(values: BookingInquiryFormValues) {
    // Always check availability first
    if (isAvailable === null) {
      // If availability hasn't been checked yet, check it
      checkAvailabilityMutation.mutate(values);
    } else if (isAvailable === true) {
      // If room is available, submit the inquiry
      inquiryMutation.mutate(values);
    } else {
      // If room is not available, reset the availability state to allow checking again
      setIsAvailable(null);
    }
  }

  return (
    <Card className={`${className} shadow-xl border-0`}>
      <CardContent className="p-8 sm:p-10">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl font-bold mb-3 bg-gradient-to-r from-amber-600 to-yellow-400 bg-clip-text text-transparent">
            Reserve Your Luxury Stay
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-neutral-700">Experience unparalleled comfort and world-class amenities</p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <div className="bg-neutral-50 p-4 rounded-md flex items-center mb-6">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <CalendarIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-900">Exclusive Online Rates</h3>
                  <p className="text-sm text-neutral-600">Best prices guaranteed when booking directly</p>
                </div>
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
                          className={`w-full pl-3 text-left font-normal h-12 ${!field.value && "text-muted-foreground"}`}
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
                        onSelect={field.onChange}
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
                          className={`w-full pl-3 text-left font-normal h-12 ${!field.value && "text-muted-foreground"}`}
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
                        onSelect={field.onChange}
                        disabled={(date) => 
                          date < new Date() || 
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
              name="guests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium mb-2">Guests</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12 flex items-center">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-neutral-500" />
                          <SelectValue placeholder="Select number of guests" />
                        </div>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {GUEST_OPTIONS.map((option) => (
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
            
            <FormField
              control={form.control}
              name="roomType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium mb-2">Room Type</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value || undefined}>
                    <FormControl>
                      <SelectTrigger className="h-12 flex items-center">
                        <div className="flex items-center">
                          <Bed className="h-4 w-4 mr-2 text-neutral-500" />
                          <SelectValue placeholder="Select room type" />
                        </div>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {ROOM_TYPES.map((option) => (
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
            
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium mb-2">Full Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-neutral-500" />
                      <Input className="pl-10 h-12" placeholder="John Doe" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium mb-2">Email Address</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-neutral-500" />
                      <Input className="pl-10 h-12" type="email" placeholder="your.email@example.com" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Availability Results */}
            {isAvailable !== null && (
              <div className="md:col-span-2 mb-4">
                <div className={`p-4 rounded-md ${isAvailable ? 'bg-green-50 border border-green-100' : 'bg-red-50 border border-red-100'}`}>
                  <div className="flex items-center">
                    {isAvailable ? (
                      <>
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <div>
                          <p className="font-medium text-green-800">Room Available!</p>
                          {totalNights > 0 && (
                            <p className="text-sm text-green-700">{totalNights} {totalNights === 1 ? 'night' : 'nights'} · Book now to secure your stay</p>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        <X className="h-5 w-5 text-red-500 mr-2" />
                        <div>
                          <p className="font-medium text-red-800">Not Available for Selected Dates</p>
                          <p className="text-sm text-red-700">Please try different dates or room type</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            <div className="md:col-span-2 mt-4">
              {isAvailable === true && recommendedRoomId ? (
                <div className="space-y-3">
                  <Button
                    asChild
                    className="w-full py-7 text-lg bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-medium shadow-lg border-none"
                  >
                    <Link href={`/rooms/${recommendedRoomId}#booking`}>
                      Proceed to Book Room
                    </Link>
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    className="w-full py-6 border-amber-500 text-amber-700 hover:bg-amber-50" 
                    onClick={() => {
                      setIsAvailable(null);
                      setRecommendedRoomId(null);
                    }}
                  >
                    Check Different Dates
                  </Button>
                </div>
              ) : (
                <Button 
                  type="submit" 
                  className="w-full py-7 text-lg bg-gradient-to-r from-amber-600 to-yellow-400 hover:from-amber-700 hover:to-amber-500 text-white font-medium shadow-lg border-none" 
                  disabled={isCheckingAvailability || inquiryMutation.isPending || checkAvailabilityMutation.isPending}
                >
                  {isCheckingAvailability 
                    ? "Checking Availability..." 
                    : isAvailable === false
                      ? "Try Different Dates"
                      : "Check Availability"}
                </Button>
              )}
              
              <p className="text-center text-xs text-neutral-500 mt-4">
                By booking, you agree to our terms and conditions. No credit card required for inquiries.
              </p>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;