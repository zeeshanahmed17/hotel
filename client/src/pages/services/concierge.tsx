import HeroSection from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  BellRing, 
  MapPin, 
  Globe, 
  Ticket, 
  Car, 
  Utensils, 
  ShoppingBag, 
  Plane, 
  GanttChart,
  ClipboardCheck
} from "lucide-react";

const Concierge = () => {
  return (
    <>
      <HeroSection 
        title="Concierge Services"
        description="Our expert concierge team is dedicated to creating exceptional experiences and attending to your every need."
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
        showButtons={false}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Personalized Service Excellence</h2>
              <p className="text-neutral-700 max-w-3xl mx-auto">
                Our dedicated concierge team combines local expertise with global connections to deliver extraordinary experiences tailored to your preferences.
              </p>
              <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1582779235670-1e3bb9257106?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                  alt="Concierge Team" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <BellRing className="h-6 w-6 text-amber-600 mr-2" />
                  <h3 className="font-serif text-2xl font-bold">Meet Our Concierge Team</h3>
                </div>
                <p className="text-neutral-700 mb-6">
                  Our multilingual concierge team is the heartbeat of Grand Azure Hotel's service excellence. With 
                  decades of combined experience and deep local knowledge, they have the expertise to fulfill every 
                  request with efficiency and creativity.
                </p>
                <p className="text-neutral-700 mb-6">
                  From securing reservations at exclusive restaurants and arranging private tours of cultural landmarks 
                  to coordinating complex travel itineraries and sourcing rare items, our concierge team goes above and 
                  beyond to create memorable experiences for our guests.
                </p>
                <div className="flex items-center text-neutral-700 font-medium">
                  <ClipboardCheck className="h-5 w-5 mr-2 text-primary" />
                  <span>Available 24 hours daily, 7 days a week</span>
                </div>
                <div className="mt-8">
                  <Button asChild>
                    <Link href="/contact">Contact Concierge</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Our Services</h2>
              <p className="text-neutral-700 max-w-3xl mx-auto">
                Discover the breadth of services our concierge team can provide to enhance your stay with us.
              </p>
              <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                      <Globe className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="font-serif text-xl font-bold">City Exploration</h3>
                  </div>
                  <p className="text-neutral-600 mb-4">
                    Let us help you discover the best of our city with personalized recommendations and arrangements.
                  </p>
                  <ul className="space-y-2 mb-6 text-neutral-700">
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <span>Private guided tours</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <span>Museum and gallery passes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <span>Historical and architectural tours</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <span>Off-the-beaten-path experiences</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                      <Ticket className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="font-serif text-xl font-bold">Entertainment</h3>
                  </div>
                  <p className="text-neutral-600 mb-4">
                    Access the finest entertainment options with our premium ticketing service and exclusive arrangements.
                  </p>
                  <ul className="space-y-2 mb-6 text-neutral-700">
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <span>Broadway shows and theater tickets</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <span>Concerts and music events</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <span>Sporting events and games</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <span>VIP experiences and access</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                      <Car className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="font-serif text-xl font-bold">Transportation</h3>
                  </div>
                  <p className="text-neutral-600 mb-4">
                    Travel in comfort and style with our premium transportation arrangements.
                  </p>
                  <ul className="space-y-2 mb-6 text-neutral-700">
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <span>Airport transfers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <span>Luxury car rentals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <span>Chauffeur services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <span>Helicopter and yacht charters</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                      <Utensils className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="font-serif text-xl font-bold">Dining</h3>
                  </div>
                  <p className="text-neutral-600 mb-4">
                    Experience exceptional cuisine with our premium dining recommendations and reservations.
                  </p>
                  <ul className="space-y-2 mb-6 text-neutral-700">
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <span>Reservations at exclusive restaurants</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <span>Chef's table experiences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <span>Food tours and culinary experiences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <span>Private dining arrangements</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                      <ShoppingBag className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="font-serif text-xl font-bold">Shopping</h3>
                  </div>
                  <p className="text-neutral-600 mb-4">
                    Discover the best shopping experiences with our curated recommendations and personal shopping services.
                  </p>
                  <ul className="space-y-2 mb-6 text-neutral-700">
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <span>Personal shopping assistants</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <span>VIP access to exclusive boutiques</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <span>Styling and fashion advice</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <span>Gift procurement services</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                      <Plane className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="font-serif text-xl font-bold">Travel Planning</h3>
                  </div>
                  <p className="text-neutral-600 mb-4">
                    Extend your journey with our comprehensive travel planning and coordination services.
                  </p>
                  <ul className="space-y-2 mb-6 text-neutral-700">
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <span>Itinerary planning and coordination</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <span>Flight bookings and upgrades</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <span>Hotel reservations worldwide</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <span>Multi-city travel arrangements</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Exclusive Experiences</h2>
              <p className="text-neutral-700 max-w-3xl mx-auto">
                Our concierge team can arrange unique, once-in-a-lifetime experiences that showcase the best of our destination.
              </p>
              <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="group relative rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80" 
                  alt="Private Museum Tours" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white font-bold text-xl mb-2">Private Museum Tours</h3>
                  <p className="text-white/90 text-sm">Exclusive after-hours access to world-renowned museums and galleries with expert guides.</p>
                </div>
              </div>
              
              <div className="group relative rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                  alt="Helicopter City Tour" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white font-bold text-xl mb-2">Helicopter City Tour</h3>
                  <p className="text-white/90 text-sm">Experience breathtaking aerial views of the cityscape on a private helicopter tour.</p>
                </div>
              </div>
              
              <div className="group relative rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80" 
                  alt="Celebrity Chef Experience" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white font-bold text-xl mb-2">Celebrity Chef Experience</h3>
                  <p className="text-white/90 text-sm">Private cooking classes or in-suite dining experiences with renowned celebrity chefs.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-neutral-700 mb-6">
                Our concierge team can customize experiences to your preferences and create bespoke adventures tailored to your interests.
              </p>
              <Button asChild className="px-8 py-6 rounded-lg text-base">
                <Link href="/contact">Inquire About Experiences</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Concierge;