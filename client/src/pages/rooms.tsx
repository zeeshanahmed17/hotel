import { useQuery } from "@tanstack/react-query";
import { type Room } from "@shared/schema";
import RoomCard from "@/components/room-card";
import AvailabilityChecker from "@/components/availability-checker";
import HeroSection from "@/components/hero-section";
import { Card, CardContent } from "@/components/ui/card";

const Rooms = () => {
  const { data: rooms, isLoading, error } = useQuery<Room[]>({ 
    queryKey: ['/api/rooms'] 
  });

  return (
    <>
      <HeroSection 
        title="Luxurious Rooms & Suites"
        description="Choose from our elegant selection of rooms and suites, each designed to provide the utmost comfort during your stay."
        image="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
        showButtons={false}
      />
      
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto mb-16">
            <AvailabilityChecker className="bg-white rounded-lg shadow-lg overflow-hidden" />
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-4">Our Accommodations</h2>
              <p className="text-neutral-700 max-w-3xl mx-auto">
                Experience the perfect blend of comfort and luxury in our thoughtfully designed rooms and suites.
              </p>
              <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
            </div>
            
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map((_, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="h-64 bg-neutral-200 animate-pulse"></div>
                    <CardContent className="p-6">
                      <div className="h-6 bg-neutral-200 animate-pulse mb-2 w-3/4"></div>
                      <div className="h-4 bg-neutral-200 animate-pulse mb-1 w-full"></div>
                      <div className="h-4 bg-neutral-200 animate-pulse mb-4 w-4/5"></div>
                      <div className="flex gap-2 mb-4">
                        <div className="h-8 bg-neutral-200 animate-pulse w-1/3 rounded-full"></div>
                        <div className="h-8 bg-neutral-200 animate-pulse w-1/3 rounded-full"></div>
                        <div className="h-8 bg-neutral-200 animate-pulse w-1/3 rounded-full"></div>
                      </div>
                      <div className="h-10 bg-neutral-200 animate-pulse"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-8">
                <p className="text-red-500">Failed to load rooms. Please try again later.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rooms?.map((room) => (
                  <RoomCard key={room.id} room={room} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-6">Room Policies</h2>
            <ul className="space-y-4 text-left text-neutral-700">
              <li className="flex items-start">
                <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
                <div>
                  <p className="font-medium">Check-in & Check-out</p>
                  <p>Check-in time: 3:00 PM | Check-out time: 12:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
                <div>
                  <p className="font-medium">Cancellation Policy</p>
                  <p>Free cancellation up to 48 hours before check-in. After that, one night's charge applies.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
                <div>
                  <p className="font-medium">Children & Extra Beds</p>
                  <p>Children of all ages are welcome. One child under 12 stays free when using existing beds.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</span>
                <div>
                  <p className="font-medium">Pets</p>
                  <p>We are pet-friendly. Additional charges may apply. Please inform us in advance.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rooms;
