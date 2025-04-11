import HeroSection from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, Bed, Users, Star, Wifi, Coffee, Bath, Tv } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Accommodation = () => {
  return (
    <>
      <HeroSection 
        title="Accommodation"
        description="Experience the pinnacle of luxury with our exquisitely designed rooms and suites."
        image="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
        showButtons={false}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Luxurious Accommodations</h2>
              <p className="text-neutral-700 max-w-3xl mx-auto">
                Our meticulously designed rooms and suites offer the perfect blend of comfort, elegance, and modern amenities 
                to ensure a memorable stay.
              </p>
              <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {/* Standard Room */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-60">
                  <img 
                    src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                    alt="Standard Room" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-xl font-bold">Standard Room</h3>
                    <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-sm font-medium">From $299/night</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-neutral-600 mb-4">
                    <div className="flex items-center mr-4">
                      <Bed className="w-4 h-4 mr-1" />
                      <span>1 King Bed</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <Users className="w-4 h-4 mr-1" />
                      <span>2 Guests</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-amber-500" />
                      <span>4.8</span>
                    </div>
                  </div>
                  
                  <p className="text-neutral-600 mb-6">
                    Our Standard Room offers luxurious comfort with elegant décor, premium bedding, and a range of amenities for a restful stay.
                  </p>
                  
                  <Button asChild className="w-full">
                    <Link href="/rooms">View Details</Link>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Deluxe Suite */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-60">
                  <img 
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                    alt="Deluxe Suite" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-xl font-bold">Deluxe Suite</h3>
                    <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-sm font-medium">From $499/night</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-neutral-600 mb-4">
                    <div className="flex items-center mr-4">
                      <Bed className="w-4 h-4 mr-1" />
                      <span>1 King Bed</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <Users className="w-4 h-4 mr-1" />
                      <span>2-3 Guests</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-amber-500" />
                      <span>4.9</span>
                    </div>
                  </div>
                  
                  <p className="text-neutral-600 mb-6">
                    Our Deluxe Suite features a spacious living area, panoramic views, and exclusive amenities for an elevated experience.
                  </p>
                  
                  <Button asChild className="w-full">
                    <Link href="/rooms">View Details</Link>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Presidential Suite */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-60">
                  <img 
                    src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80" 
                    alt="Presidential Suite" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">PREMIUM</div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-xl font-bold">Presidential Suite</h3>
                    <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-sm font-medium">From $899/night</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-neutral-600 mb-4">
                    <div className="flex items-center mr-4">
                      <Bed className="w-4 h-4 mr-1" />
                      <span>2 King Beds</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <Users className="w-4 h-4 mr-1" />
                      <span>4 Guests</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-amber-500" />
                      <span>5.0</span>
                    </div>
                  </div>
                  
                  <p className="text-neutral-600 mb-6">
                    Our Presidential Suite offers the ultimate luxury experience with a private terrace, personal butler service, and exclusive amenities.
                  </p>
                  
                  <Button asChild className="w-full">
                    <Link href="/rooms">View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Room Amenities</h2>
              <p className="text-neutral-700 max-w-3xl mx-auto">
                All our rooms and suites come with a range of premium amenities to ensure a comfortable and luxurious stay.
              </p>
              <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                    <Wifi className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="font-medium text-xl">High-Speed WiFi</h3>
                </div>
                <p className="text-neutral-600">
                  Complimentary high-speed WiFi to keep you connected throughout your stay.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                    <Coffee className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="font-medium text-xl">In-Room Dining</h3>
                </div>
                <p className="text-neutral-600">
                  24-hour room service with an extensive menu of gourmet dishes and beverages.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                    <Bath className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="font-medium text-xl">Luxury Bathroom</h3>
                </div>
                <p className="text-neutral-600">
                  Marble bathrooms with premium toiletries, plush robes, and rainfall showers.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                    <Tv className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="font-medium text-xl">Entertainment</h3>
                </div>
                <p className="text-neutral-600">
                  Smart TVs with streaming services, Bluetooth speakers, and media connectivity.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild className="px-8 py-6 rounded-lg text-base">
                <Link href="/rooms">Explore All Room Options</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Accommodation;