import HeroSection from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import { Clock, Heart, Leaf, Droplets, Wind } from "lucide-react";

const Spa = () => {
  return (
    <>
      <HeroSection 
        title="Spa & Wellness"
        description="Immerse yourself in tranquility and rejuvenation at our luxury spa retreat."
        image="https://images.unsplash.com/photo-1545579133-99bb5ab189bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
        showButtons={false}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Your Wellness Journey</h2>
              <p className="text-neutral-700 max-w-3xl mx-auto">
                Step into a world of serenity at our award-winning spa, where ancient healing traditions meet modern wellness techniques.
              </p>
              <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                  alt="Spa Interior" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold mb-4">Serenity Spa</h3>
                <p className="text-neutral-700 mb-6">
                  Our Serenity Spa is designed to be a sanctuary of peace and relaxation. Drawing inspiration from ancient healing 
                  traditions and incorporating cutting-edge wellness techniques, our spa offers a comprehensive range of treatments 
                  and therapies designed to nourish both body and mind.
                </p>
                <p className="text-neutral-700 mb-6">
                  Our expert therapists are trained in various modalities and use only premium organic products to ensure the highest 
                  quality experience. Each treatment is personalized to address your specific needs, ensuring a truly transformative experience.
                </p>
                <div className="flex items-center text-neutral-600 mb-4">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Open daily: 8:00 AM - 9:00 PM</span>
                </div>
                <Button asChild className="mt-2">
                  <Link href="/contact">Book a Treatment</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Spa Treatments & Services</h2>
              <p className="text-neutral-700 max-w-3xl mx-auto">
                Discover our range of luxurious treatments designed to rejuvenate, restore, and revitalize.
              </p>
              <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {/* Massage Therapies */}
              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                      <Heart className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="font-serif text-xl font-bold">Massage Therapies</h3>
                  </div>
                  <p className="text-neutral-600 mb-4">
                    Our skilled therapists offer a variety of massage techniques to release tension, improve circulation, and promote relaxation.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <div>
                        <span className="font-medium">Signature Azure Massage</span>
                        <p className="text-sm text-neutral-500">90 min - $220</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <div>
                        <span className="font-medium">Deep Tissue Massage</span>
                        <p className="text-sm text-neutral-500">60/90 min - $180/$240</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <div>
                        <span className="font-medium">Hot Stone Therapy</span>
                        <p className="text-sm text-neutral-500">75 min - $210</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <div>
                        <span className="font-medium">Aromatherapy Massage</span>
                        <p className="text-sm text-neutral-500">60/90 min - $170/$230</p>
                      </div>
                    </li>
                  </ul>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/contact">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Facial Treatments */}
              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                      <Leaf className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="font-serif text-xl font-bold">Facial Treatments</h3>
                  </div>
                  <p className="text-neutral-600 mb-4">
                    Our customized facial treatments use premium skincare products to address your specific skin concerns and reveal your natural glow.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <div>
                        <span className="font-medium">Luxury Anti-Aging Facial</span>
                        <p className="text-sm text-neutral-500">75 min - $240</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <div>
                        <span className="font-medium">Hydrating Facial</span>
                        <p className="text-sm text-neutral-500">60 min - $180</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <div>
                        <span className="font-medium">Gentleman's Facial</span>
                        <p className="text-sm text-neutral-500">60 min - $170</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <div>
                        <span className="font-medium">Express Radiance Facial</span>
                        <p className="text-sm text-neutral-500">30 min - $120</p>
                      </div>
                    </li>
                  </ul>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/contact">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Body Treatments */}
              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                      <Droplets className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="font-serif text-xl font-bold">Body Treatments</h3>
                  </div>
                  <p className="text-neutral-600 mb-4">
                    Indulge in our luxurious body treatments designed to detoxify, exfoliate, and nourish your skin from head to toe.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <div>
                        <span className="font-medium">Detoxifying Body Wrap</span>
                        <p className="text-sm text-neutral-500">90 min - $250</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <div>
                        <span className="font-medium">Sea Salt Exfoliation</span>
                        <p className="text-sm text-neutral-500">60 min - $170</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <div>
                        <span className="font-medium">Hydrating Body Cocoon</span>
                        <p className="text-sm text-neutral-500">75 min - $220</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <div>
                        <span className="font-medium">Aromatherapy Scrub</span>
                        <p className="text-sm text-neutral-500">45 min - $150</p>
                      </div>
                    </li>
                  </ul>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/contact">Book Now</Link>
                  </Button>
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
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Wellness Facilities</h2>
              <p className="text-neutral-700 max-w-3xl mx-auto">
                Enhance your spa experience with our premium wellness facilities, designed to promote holistic well-being.
              </p>
              <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <div className="group relative rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1073&q=80" 
                  alt="Thermal Suite" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white font-bold text-xl mb-2">Thermal Suite</h3>
                  <p className="text-white/90 text-sm">Experience our steam room, sauna, and heated loungers to detoxify and relax your muscles.</p>
                </div>
              </div>
              
              <div className="group relative rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1572627690516-1dbd8e55ac4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80" 
                  alt="Hydrotherapy Pool" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white font-bold text-xl mb-2">Hydrotherapy Pool</h3>
                  <p className="text-white/90 text-sm">Our therapeutic pool features massaging jets and mineral-enriched water for deep relaxation.</p>
                </div>
              </div>
              
              <div className="group relative rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1659898945030-fc138845bbbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80" 
                  alt="Relaxation Lounge" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white font-bold text-xl mb-2">Relaxation Lounge</h3>
                  <p className="text-white/90 text-sm">Unwind in our tranquil lounge with herbal teas, comfortable loungers, and soothing ambiance.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-neutral-700 mb-6">
                All spa guests have complimentary access to our wellness facilities. Spa day passes are also available for hotel guests and visitors.
              </p>
              <Button asChild className="px-8 py-6 rounded-lg text-base">
                <Link href="/contact">Book Your Spa Experience</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Spa;