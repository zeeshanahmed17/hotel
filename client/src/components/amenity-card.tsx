import { Card, CardContent } from "@/components/ui/card";
import type { Amenity } from "@shared/schema";
import { 
  Waves, 
  Utensils, 
  Dumbbell, 
  Wifi, 
  BellRing, 
  Flower 
} from "lucide-react";

interface AmenityCardProps {
  amenity: Amenity;
}

const AmenityCard = ({ amenity }: AmenityCardProps) => {
  const { name, description, icon } = amenity;
  
  const getIcon = () => {
    switch (icon) {
      case "swimming-pool":
        return <Waves className="text-white h-6 w-6" />;
      case "utensils":
        return <Utensils className="text-white h-6 w-6" />;
      case "dumbbell":
        return <Dumbbell className="text-white h-6 w-6" />;
      case "wifi":
        return <Wifi className="text-white h-6 w-6" />;
      case "concierge-bell":
        return <BellRing className="text-white h-6 w-6" />;
      case "spa":
        return <Flower className="text-white h-6 w-6" />;
      default:
        return <BellRing className="text-white h-6 w-6" />;
    }
  };
  
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] overflow-hidden group">
      <CardContent className="p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-6">
            <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-yellow-400 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
              {getIcon()}
            </div>
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold mb-2">{name}</h3>
            <div className="w-12 h-0.5 bg-primary mb-3"></div>
            <p className="text-neutral-700">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AmenityCard;
