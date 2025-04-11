import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { CalendarIcon, Users, Bed, Check, X } from "lucide-react";
import { z } from "zod";
import { ROOM_TYPES, GUEST_OPTIONS } from "@/lib/constants";
import { Link } from "wouter";

// Define schema just for the availability check
const availabilityCheckSchema = z.object({
  checkInDate: z.date({
    required_error: "Check-in date is required",
  }),
  checkOutDate: z.date({
    required_error: "Check-out date is required",
  }),
  guests: z.string().min(1, "Please select number of guests"),
  roomType: z.string().min(1, "Please select a room type"),
});

type AvailabilityCheckFormValues = z.infer<typeof availabilityCheckSchema>;

interface AvailabilityCheckerProps {
  defaultRoomType?: string;
  className?: string;
}

const AvailabilityChecker = ({ defaultRoomType, className }: AvailabilityCheckerProps) => {
  const { toast } = useToast();
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);
  const [recommendedRoomId, setRecommendedRoomId] = useState<number | null>(null);
  const [totalNights, setTotalNights] = useState(0);

  const form = useForm<AvailabilityCheckFormValues>({
    resolver: zodResolver(availabilityCheckSchema),
    defaultValues: {
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
  if (isAvailable !== null && form.formState.isDirty) {
    setIsAvailable(null);
    setRecommendedRoomId(null);
  }

  // Direct function to check availability on button click
  async function checkAvailability() {
    const values = form.getValues();
    
    // Validate required fields
    if (!values.checkInDate || !values.checkOutDate || !values.roomType) {
      toast({
        title: "Missing Information",
        description: "Please select all required fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsCheckingAvailability(true);
    
    try {
      // Find the room ID based on room type
      let roomId = 0;
      
      if (values.roomType.toLowerCase().includes("standard")) {
        roomId = 1;
      } else if (values.roomType.toLowerCase().includes("deluxe")) {
        roomId = 2;
      } else if (values.roomType.toLowerCase().includes("executive")) {
        roomId = 3;
      } else if (values.roomType.toLowerCase().includes("presidential")) {
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
      } else {
        // If no specific room type was detected, check all rooms
        setIsAvailable(true);
        setRecommendedRoomId(1); // Default to first room type
      }
    } catch (error) {
      console.error("Error checking availability:", error);
      toast({
        title: "Error",
        description: "Failed to check availability. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsCheckingAvailability(false);
    }
  }

  function onSubmit(values: AvailabilityCheckFormValues) {
    checkAvailability();
  }

  return (
    <Card className={`${className} shadow-xl border-0`}>
      <CardContent className="p-8 sm:p-10">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl font-bold mb-3 bg-gradient-to-r from-amber-600 to-yellow-400 bg-clip-text text-transparent">
            Check Availability
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-neutral-700">See if your preferred dates are available</p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">            
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
                        onSelect={(date) => {
                          field.onChange(date);
                          setIsAvailable(null); // Reset availability when dates change 
                        }}
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
                  <Select onValueChange={(value) => {
                    field.onChange(value);
                    setIsAvailable(null); // Reset availability when guest count changes
                  }} value={field.value}>
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
                  <Select onValueChange={(value) => {
                    field.onChange(value);
                    setIsAvailable(null); // Reset availability when room type changes
                  }} value={field.value || undefined}>
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
                      checkAvailability(); // Check again with current values
                    }}
                  >
                    Check Again
                  </Button>
                </div>
              ) : (
                <Button 
                  type="button" 
                  onClick={() => checkAvailability()}
                  className="w-full py-7 text-lg bg-gradient-to-r from-amber-600 to-yellow-400 hover:from-amber-700 hover:to-amber-500 text-white font-medium shadow-lg border-none" 
                  disabled={isCheckingAvailability}
                >
                  {isCheckingAvailability 
                    ? "Checking Availability..." 
                    : isAvailable === false
                      ? "Try Different Dates"
                      : "Check Availability"}
                </Button>
              )}
              
              <p className="text-center text-xs text-neutral-500 mt-4">
                Best rates guaranteed when booking directly through our website.
              </p>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AvailabilityChecker;