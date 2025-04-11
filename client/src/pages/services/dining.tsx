import HeroSection from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import { Clock, Utensils, Wine, Coffee } from "lucide-react";

const Dining = () => {
  return (
    <>
      <HeroSection 
        title="Restaurant & Bar"
        description="Indulge in exceptional culinary experiences crafted by our award-winning chefs."
        image="https://images.unsplash.com/photo-1621193793262-4127d9855c91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
        showButtons={false}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Culinary Excellence</h2>
              <p className="text-neutral-700 max-w-3xl mx-auto">
                Experience world-class cuisine at our signature restaurants and bars, where every dish and drink is crafted with passion and precision.
              </p>
              <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
            </div>
            
            {/* Azure Restaurant */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80" 
                  alt="Azure Restaurant" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <Utensils className="h-6 w-6 text-amber-600 mr-2" />
                  <h3 className="font-serif text-2xl font-bold">Azure Restaurant</h3>
                </div>
                <p className="text-neutral-700 mb-4">
                  Our signature fine dining restaurant offers an exquisite menu featuring locally sourced ingredients and 
                  globally inspired cuisine. Led by Michelin-starred Chef Marcus Laurent, Azure Restaurant transforms dining 
                  into an unforgettable sensory experience.
                </p>
                <div className="flex items-center text-neutral-600 mb-2">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Breakfast: 7:00 AM - 10:30 AM</span>
                </div>
                <div className="flex items-center text-neutral-600 mb-2">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Lunch: 12:00 PM - 2:30 PM</span>
                </div>
                <div className="flex items-center text-neutral-600 mb-6">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Dinner: 6:00 PM - 10:30 PM</span>
                </div>
                <Button asChild className="mt-4 w-fit">
                  <Link href="/contact">Make a Reservation</Link>
                </Button>
              </div>
            </div>
            
            {/* Skyline Rooftop Bar */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
              <div className="flex flex-col justify-center order-2 lg:order-1">
                <div className="flex items-center mb-4">
                  <Wine className="h-6 w-6 text-amber-600 mr-2" />
                  <h3 className="font-serif text-2xl font-bold">Skyline Rooftop Bar</h3>
                </div>
                <p className="text-neutral-700 mb-4">
                  Perched on the 20th floor, our Skyline Rooftop Bar offers breathtaking panoramic views of the city skyline. 
                  Enjoy handcrafted cocktails, premium spirits, and a curated selection of wines while taking in the stunning vista. 
                  Our mixologists create signature drinks that complement the sophisticated ambiance.
                </p>
                <div className="flex items-center text-neutral-600 mb-6">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Open daily: 4:00 PM - 1:00 AM</span>
                </div>
                <Button asChild className="mt-4 w-fit">
                  <Link href="/contact">Learn More</Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1605346495609-1350e39faed9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                  alt="Skyline Rooftop Bar" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Café & Bakery */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80" 
                  alt="Café & Bakery" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <Coffee className="h-6 w-6 text-amber-600 mr-2" />
                  <h3 className="font-serif text-2xl font-bold">Café & Bakery</h3>
                </div>
                <p className="text-neutral-700 mb-4">
                  Located in our elegant lobby, the Café & Bakery offers artisanal coffees, freshly baked pastries, 
                  and light bites throughout the day. It's the perfect spot to enjoy a quiet moment or catch up with friends. 
                  Our in-house pastry chef creates delectable treats that pair perfectly with our specialty coffee blends.
                </p>
                <div className="flex items-center text-neutral-600 mb-6">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Open daily: 6:00 AM - 8:00 PM</span>
                </div>
                <Button asChild className="mt-4 w-fit">
                  <Link href="/contact">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Special Culinary Experiences</h2>
              <p className="text-neutral-700 max-w-3xl mx-auto">
                Beyond our restaurants and bars, we offer unique dining experiences that create unforgettable memories.
              </p>
              <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <Card className="overflow-hidden">
                <div className="h-60 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                    alt="Private Dining" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-3">Private Dining</h3>
                  <p className="text-neutral-600 mb-4">
                    Celebrate special occasions in our private dining room, featuring personalized menus and dedicated service 
                    for an intimate culinary experience.
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/contact">Inquire Now</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <div className="h-60 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1556910103-1c02745aaf4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                    alt="Chef's Table" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-3">Chef's Table</h3>
                  <p className="text-neutral-600 mb-4">
                    Experience the ultimate culinary journey with our Chef's Table, where you'll enjoy a multi-course tasting menu 
                    while interacting with our talented chefs.
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/contact">Inquire Now</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-neutral-700 mb-6">
                For special dietary requirements or custom dining arrangements, our culinary team is happy to accommodate your needs.
              </p>
              <Button asChild className="px-8 py-6 rounded-lg text-base">
                <Link href="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dining;