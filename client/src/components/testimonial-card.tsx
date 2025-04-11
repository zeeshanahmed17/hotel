import { Card, CardContent } from "@/components/ui/card";
import { type Testimonial } from "@shared/schema";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const { name, location, content, rating, avatar } = testimonial;
  
  return (
    <Card className="bg-neutral-50">
      <CardContent className="p-6">
        <div className="flex text-amber-500 mb-3">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="fill-current" />
          ))}
        </div>
        <p className="text-neutral-700 mb-4 italic">
          "{content}"
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-neutral-300 overflow-hidden">
            <img 
              src={avatar} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-3">
            <p className="font-medium">{name}</p>
            <p className="text-sm text-neutral-500">{location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
