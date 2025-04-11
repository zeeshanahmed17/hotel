import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Copy, MessageSquare, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface WelcomeMessageGeneratorProps {
  guestName?: string;
  roomName?: string;
  checkInDate?: Date;
  checkOutDate?: Date;
  className?: string;
}

const WelcomeMessageGenerator = ({
  guestName = "",
  roomName = "",
  checkInDate,
  checkOutDate,
  className
}: WelcomeMessageGeneratorProps) => {
  const { toast } = useToast();
  const [name, setName] = useState(guestName);
  const [room, setRoom] = useState(roomName);
  const [arrivalDate, setArrivalDate] = useState<Date | undefined>(checkInDate);
  const [departureDate, setDepartureDate] = useState<Date | undefined>(checkOutDate);
  const [specialOccasion, setSpecialOccasion] = useState("");
  const [preferences, setPreferences] = useState("");
  const [generatedMessage, setGeneratedMessage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  // Welcome message templates
  const welcomeTemplates = [
    "Dear {name}, Welcome to Grand Azure Hotel! We're delighted to have you staying with us in our {room}. Your room is prepared and waiting for your arrival on {arrivalDate}. We hope you enjoy your stay until {departureDate}. {occasionMessage} {preferencesMessage} Our team is available 24/7 to assist you with anything you might need. Warm regards, The Grand Azure Hotel Team",
    
    "A warm welcome awaits you, {name}! We're thrilled you've chosen Grand Azure Hotel for your upcoming stay from {arrivalDate} to {departureDate}. Your {room} has been prepared with care to ensure your utmost comfort. {occasionMessage} {preferencesMessage} Should you require any assistance during your stay, please don't hesitate to contact our concierge. We look forward to making your stay memorable! Best wishes, Grand Azure Hotel Management",
    
    "Greetings {name}! We're excited to welcome you to Grand Azure Hotel on {arrivalDate}. Your {room} is being meticulously prepared for your arrival. Your reservation is confirmed until {departureDate}. {occasionMessage} {preferencesMessage} Our dedicated staff is ready to ensure your stay exceeds expectations. Safe travels, and we'll see you soon! Sincerely, Grand Azure Hotel",
    
    "Welcome to luxury, {name}! Your journey at Grand Azure Hotel begins on {arrivalDate} when you check into your {room}. We have you booked with us until {departureDate} and are committed to making every moment special. {occasionMessage} {preferencesMessage} If there's anything we can do to enhance your experience, please let us know. Looking forward to your arrival! Best regards, The Grand Azure Team",
  ];
  
  // Generate personalized welcome message
  const generateMessage = () => {
    setIsGenerating(true);
    setTimeout(() => {
      try {
        // Select a random template
        const randomTemplate = welcomeTemplates[Math.floor(Math.random() * welcomeTemplates.length)];
        
        // Format dates
        const formattedArrivalDate = arrivalDate ? format(arrivalDate, "MMMM do, yyyy") : "[arrival date]";
        const formattedDepartureDate = departureDate ? format(departureDate, "MMMM do, yyyy") : "[departure date]";
        
        // Prepare occasion message if provided
        let occasionMsg = "";
        if (specialOccasion) {
          occasionMsg = `We understand you're celebrating ${specialOccasion} during your stay. We've arranged a special surprise to help you celebrate this momentous occasion!`;
        }
        
        // Prepare preferences message if provided
        let preferencesMsg = "";
        if (preferences) {
          preferencesMsg = `We've noted your preferences for ${preferences} and have made arrangements accordingly.`;
        }
        
        // Replace placeholders with actual values
        let message = randomTemplate
          .replace("{name}", name || "[Guest Name]")
          .replace("{room}", room || "[Room Type]")
          .replace("{arrivalDate}", formattedArrivalDate)
          .replace("{departureDate}", formattedDepartureDate)
          .replace("{occasionMessage}", occasionMsg)
          .replace("{preferencesMessage}", preferencesMsg);
        
        // Clean up any double spaces from empty replacements
        message = message.replace(/\s\s+/g, " ").trim();
        
        setGeneratedMessage(message);
      } catch (error) {
        toast({
          title: "Error Generating Message",
          description: "There was a problem creating your welcome message. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsGenerating(false);
      }
    }, 800); // Simulate processing time for better UX
  };
  
  // Copy message to clipboard
  const copyToClipboard = () => {
    if (generatedMessage) {
      navigator.clipboard.writeText(generatedMessage)
        .then(() => {
          toast({
            title: "Copied to Clipboard",
            description: "Welcome message has been copied to your clipboard!",
          });
        })
        .catch(() => {
          toast({
            title: "Copy Failed",
            description: "Could not copy to clipboard. Please try again.",
            variant: "destructive",
          });
        });
    }
  };

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Welcome Message Generator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="guest-name">Guest Name</Label>
            <Input
              id="guest-name"
              placeholder="Enter guest name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="room-type">Room Type</Label>
            <Input
              id="room-type"
              placeholder="Enter room type/name"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Check-in Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !arrivalDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {arrivalDate ? format(arrivalDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={arrivalDate}
                  onSelect={setArrivalDate}
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="space-y-2">
            <Label>Check-out Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !departureDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {departureDate ? format(departureDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={departureDate}
                  onSelect={setDepartureDate}
                  disabled={(date) => {
                    // Can't select dates before arrival date
                    return arrivalDate ? date < arrivalDate : false;
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="special-occasion">Special Occasion (Optional)</Label>
          <Input
            id="special-occasion"
            placeholder="Birthday, Anniversary, etc."
            value={specialOccasion}
            onChange={(e) => setSpecialOccasion(e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="preferences">Guest Preferences (Optional)</Label>
          <Input
            id="preferences"
            placeholder="Extra pillows, quiet room, etc."
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
          />
        </div>
        
        <Button 
          onClick={generateMessage} 
          disabled={isGenerating}
          className="w-full"
        >
          {isGenerating ? (
            <>
              <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            "Generate Welcome Message"
          )}
        </Button>
        
        {generatedMessage && (
          <div className="mt-4 space-y-2">
            <Label>Your Personalized Welcome Message</Label>
            <div className="relative">
              <Textarea
                value={generatedMessage}
                readOnly
                className="min-h-[150px] resize-none p-4 text-sm"
              />
              <Button
                size="sm"
                variant="ghost"
                className="absolute right-2 top-2"
                onClick={copyToClipboard}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between text-xs text-muted-foreground">
        <p>All messages are generated instantly and securely.</p>
      </CardFooter>
    </Card>
  );
};

export default WelcomeMessageGenerator;