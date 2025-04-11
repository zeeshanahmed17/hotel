import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Bed, 
  Users, 
  Ruler, 
  ArrowRight,
  Star
} from "lucide-react";
import { type Room } from "@shared/schema";

interface RoomCardProps {
  room: Room;
}

const RoomCard = ({ room }: RoomCardProps) => {
  const { id, name, description, price, image, capacity, size, bedType } = room;
  
  return (
    <Card className="overflow-hidden transition duration-300 hover:shadow-xl group">
      <div className="relative h-72 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-600 to-yellow-400 text-white px-4 py-2 rounded-md text-sm font-medium shadow-lg">
          <span className="font-bold">${price.toFixed(2)}</span><span className="text-xs">/night</span>
        </div>
      </div>
      <CardContent className="p-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-serif text-2xl font-bold">{name}</h3>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 text-primary fill-primary" />
            ))}
          </div>
        </div>
        
        <div className="w-16 h-0.5 bg-primary mb-4"></div>
        
        <p className="text-neutral-700 mb-6">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-full text-sm flex items-center">
            <Ruler className="w-4 h-4 mr-2 text-primary" /> {size} sq ft
          </span>
          <span className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-full text-sm flex items-center">
            <Users className="w-4 h-4 mr-2 text-primary" /> {capacity} Guests
          </span>
          <span className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-full text-sm flex items-center">
            <Bed className="w-4 h-4 mr-2 text-primary" /> {bedType}
          </span>
        </div>
        
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Button asChild className="flex-1 bg-gradient-to-r from-amber-600 to-yellow-400 hover:from-amber-700 hover:to-amber-500 text-white font-medium py-6">
            <Link href={`/rooms/${id}#booking`}>
              Book Now
            </Link>
          </Button>
          <Button asChild variant="outline" className="flex-1 border-primary text-primary hover:bg-primary/10 py-6">
            <Link href={`/rooms/${id}`} className="flex items-center justify-center">
              View Details <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoomCard;
