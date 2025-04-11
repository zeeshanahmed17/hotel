import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Room } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bed, 
  Users, 
  SquareIcon, 
  CheckCircle, 
  XCircle, 
  ArrowRightLeft
} from "lucide-react";
import { cn } from "@/lib/utils";

interface RoomComparisonProps {
  initialRooms?: Room[];
  onClose: () => void;
  className?: string;
}

const RoomComparison = ({ initialRooms, onClose, className }: RoomComparisonProps) => {
  const [selectedRooms, setSelectedRooms] = useState<Room[]>(initialRooms || []);
  const [comparisonCategories] = useState<string[]>([
    "price", "size", "capacity", "beds", "amenities"
  ]);

  // Strongly type the API response
  const { data: rooms = [] } = useQuery<Room[]>({
    queryKey: ["/api/rooms"],
    enabled: !initialRooms || initialRooms.length === 0,
  });

  // Set initial selected rooms if not provided
  useEffect(() => {
    if (!initialRooms && rooms && rooms.length >= 2) {
      setSelectedRooms([rooms[0], rooms[1]]);
    }
  }, [initialRooms, rooms]);

  // Handle adding a room to compare
  const handleAddRoom = (room: Room) => {
    if (!selectedRooms.some(r => r.id === room.id) && selectedRooms.length < 3) {
      setSelectedRooms([...selectedRooms, room]);
    }
  };

  // Handle removing a room from comparison
  const handleRemoveRoom = (roomId: number) => {
    setSelectedRooms(selectedRooms.filter(room => room.id !== roomId));
  };

  // Handle replacing a room in comparison
  const handleReplaceRoom = (oldRoomId: number, newRoom: Room) => {
    setSelectedRooms(selectedRooms.map(room => 
      room.id === oldRoomId ? newRoom : room
    ));
  };

  // Check if all rooms have a specific amenity
  const allRoomsHaveAmenity = (amenity: string) => {
    return selectedRooms.every(room => 
      room.amenities && Array.isArray(room.amenities) && 
      room.amenities.includes(amenity)
    );
  };

  // Get all unique amenities across selected rooms
  const getAllUniqueAmenities = () => {
    const allAmenities = new Set<string>();
    selectedRooms.forEach(room => {
      if (room.amenities && Array.isArray(room.amenities)) {
        room.amenities.forEach(amenity => {
          allAmenities.add(amenity);
        });
      }
    });
    return Array.from(allAmenities);
  };

  // Render a comparison row for numeric values
  const renderNumericComparison = (category: string, getValue: (room: Room) => number | undefined) => {
    const maxValue = Math.max(...selectedRooms.map(room => getValue(room) || 0));
    
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        <div className="flex items-center font-medium">
          {getCategoryLabel(category)}
        </div>
        {selectedRooms.map(room => {
          const value = getValue(room) || 0;
          const isMaxValue = value === maxValue;
          
          return (
            <div key={`${room.id}-${category}`} className="text-center">
              <span className={cn(
                "text-xl font-semibold block",
                isMaxValue && selectedRooms.length > 1 ? "text-primary" : ""
              )}>
                {formatValue(category, value)}
              </span>
              {isMaxValue && selectedRooms.length > 1 && (
                <Badge variant="outline" className="mt-1 bg-primary/10">Best Value</Badge>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  // Helper to format values based on category
  const formatValue = (category: string, value: number) => {
    switch (category) {
      case "price":
        return `$${value.toFixed(2)}`;
      case "size":
        return `${value} sq ft`;
      default:
        return value;
    }
  };

  // Helper to get user-friendly category labels
  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      price: "Price per Night",
      size: "Room Size",
      capacity: "Max Guests",
      beds: "Number of Beds",
      amenities: "Amenities"
    };
    return labels[category] || category;
  };

  // Get the icon for a specific category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "price":
        return null;
      case "size":
        return <SquareIcon className="h-5 w-5 mr-2" />;
      case "capacity":
        return <Users className="h-5 w-5 mr-2" />;
      case "beds":
        return <Bed className="h-5 w-5 mr-2" />;
      default:
        return null;
    }
  };

  // If no rooms to compare, show empty state
  if (!selectedRooms.length) {
    return (
      <Card className={cn("w-full shadow-lg", className)}>
        <CardHeader>
          <CardTitle className="text-center">Room Comparison</CardTitle>
        </CardHeader>
        <CardContent className="text-center p-8">
          <p className="mb-4">Select rooms to compare features and amenities</p>
          <Button onClick={onClose}>Return to Rooms</Button>
        </CardContent>
      </Card>
    );
  }
  
  const uniqueAmenities = getAllUniqueAmenities();

  return (
    <Card className={cn("w-full shadow-lg overflow-hidden", className)}>
      <CardHeader className="bg-primary/5">
        <div className="flex justify-between items-center">
          <CardTitle>Room Comparison</CardTitle>
          <Button variant="outline" size="sm" onClick={onClose}>
            Close
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4 md:p-6">
        {/* Room Header Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 mt-2">
          <div></div>
          {selectedRooms.map(room => (
            <div key={`header-${room.id}`} className="text-center">
              <img 
                src={room.image} 
                alt={room.name} 
                className="w-full h-48 object-cover rounded-md mb-2"
              />
              <h3 className="font-bold text-lg">{room.name}</h3>
              <div className="flex justify-center mt-2 space-x-2">
                {rooms.length > selectedRooms.length && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center"
                    onClick={() => {
                      // Find the first room that's not in the comparison
                      const availableRooms = rooms.filter(
                        r => !selectedRooms.some(sr => sr.id === r.id)
                      );
                      if (availableRooms.length) {
                        handleReplaceRoom(room.id, availableRooms[0]);
                      }
                    }}
                  >
                    <ArrowRightLeft className="h-4 w-4 mr-1" />
                    Swap
                  </Button>
                )}
                {selectedRooms.length > 1 && (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleRemoveRoom(room.id)}
                  >
                    Remove
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="my-4" />

        {/* Basic Comparisons */}
        {renderNumericComparison("price", (room) => room.price)}
        {renderNumericComparison("size", (room) => room.size)}
        {renderNumericComparison("capacity", (room) => room.capacity)}
        {renderNumericComparison("beds", (room) => room.beds)}
        
        {/* Amenities Comparison */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          <div className="flex items-center font-medium">
            Amenities
          </div>
          {selectedRooms.map((room) => (
            <div key={`amenities-${room.id}`} className="text-center">
              <span className="block text-sm">
                {room.amenities && Array.isArray(room.amenities) ? room.amenities.length : 0} amenities
              </span>
            </div>
          ))}
        </div>
        
        {/* Detailed Amenities */}
        <div className="bg-neutral-50 p-4 rounded-md mt-2">
          <h4 className="font-medium mb-2">Detailed Amenities</h4>
          {uniqueAmenities.map(amenity => (
            <div key={amenity} className="grid grid-cols-2 md:grid-cols-3 gap-4 py-1">
              <div className="text-neutral-600">{amenity}</div>
              {selectedRooms.map(room => (
                <div key={`${room.id}-${amenity}`} className="text-center">
                  {room.amenities && Array.isArray(room.amenities) && room.amenities.includes(amenity) ? (
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  ) : (
                    <XCircle className="h-5 w-5 text-neutral-300 mx-auto" />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        
        {/* Add More Button */}
        {selectedRooms.length < 3 && rooms.length > selectedRooms.length && (
          <div className="mt-6 text-center">
            <Button 
              variant="outline"
              onClick={() => {
                // Find the first room that's not already in the comparison
                const nextRoom = rooms.find(room => !selectedRooms.some(r => r.id === room.id));
                if (nextRoom) {
                  handleAddRoom(nextRoom);
                }
              }}
            >
              Add Another Room
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RoomComparison;