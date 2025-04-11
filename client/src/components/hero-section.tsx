import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { HERO_DATA } from "@/lib/constants";
import { Star, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  description?: string;
  image?: string;
  showButtons?: boolean;
}

const HeroSection = ({
  title = HERO_DATA.title,
  description = HERO_DATA.description,
  image = HERO_DATA.image,
  showButtons = true
}: HeroSectionProps) => {
  return (
    <section className="relative bg-neutral-900 h-[90vh] max-h-[800px] min-h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt="Grand Azure Hotel" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>
      
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 text-primary fill-primary" />
          ))}
        </div>
        
        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 max-w-4xl drop-shadow-md leading-tight">
          {title}
        </h1>
        
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        
        <p className="text-lg md:text-xl text-white mb-10 max-w-2xl drop-shadow-md">
          {description}
        </p>
        
        {showButtons && (
          <div className="flex flex-col sm:flex-row gap-5">
            <Button asChild size="lg" className="bg-gradient-to-r from-amber-600 to-yellow-400 hover:from-amber-700 hover:to-amber-500 text-white border-none px-8 py-7 font-medium text-lg shadow-lg">
              <Link href="/rooms">Book Your Stay</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent hover:bg-white/10 text-white border-white border-2 hover:border-primary hover:text-primary px-8 py-7 font-medium text-lg">
              <Link href="/rooms" className="flex items-center">
                Explore Rooms <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        )}
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="flex flex-col items-center animate-bounce">
            <div className="w-1 h-8 border-l-2 border-white/60"></div>
            <div className="w-4 h-4 border-b-2 border-r-2 border-white/60 transform rotate-45 mt-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
