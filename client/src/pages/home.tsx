import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { 
  Check, 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail 
} from "lucide-react";
import HeroSection from "@/components/hero-section";
import AvailabilityChecker from "@/components/availability-checker";
import RoomCard from "@/components/room-card";
import AmenityCard from "@/components/amenity-card";
import GalleryItemComponent from "@/components/gallery-item";
import TestimonialCard from "@/components/testimonial-card";
import ContactForm from "@/components/contact-form";
import { 
  ABOUT_DATA, 
  CONTACT_INFO 
} from "@/lib/constants";
import { type Room, type Amenity, type GalleryItem, type Testimonial } from "@shared/schema";

const Home = () => {
  const roomsQuery = useQuery<Room[]>({ 
    queryKey: ['/api/rooms'] 
  });
  
  const amenitiesQuery = useQuery<Amenity[]>({ 
    queryKey: ['/api/amenities'] 
  });
  
  const galleryQuery = useQuery<GalleryItem[]>({ 
    queryKey: ['/api/gallery'] 
  });
  
  const testimonialsQuery = useQuery<Testimonial[]>({ 
    queryKey: ['/api/testimonials'] 
  });

  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Booking Form */}
      <section id="booking" className="bg-neutral-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <AvailabilityChecker className="bg-white rounded-lg shadow-lg overflow-hidden" />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-4">{ABOUT_DATA.title}</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                {ABOUT_DATA.description.map((paragraph, index) => (
                  <p key={index} className="text-neutral-700 mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                <ul className="space-y-3 text-neutral-700">
                  {ABOUT_DATA.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="text-amber-500 mt-1 mr-3 h-5 w-5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {ABOUT_DATA.images.map((image, index) => (
                  <img 
                    key={index}
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Rooms Section */}
      <section id="rooms" className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-4">Our Elegant Accommodations</h2>
            <p className="text-neutral-700 max-w-3xl mx-auto">
              Experience the perfect blend of comfort and luxury in our thoughtfully designed rooms and suites.
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roomsQuery.isLoading ? (
              Array.from({ length: 3 }).map((_, index) => (
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
              ))
            ) : roomsQuery.error ? (
              <div className="col-span-3 text-center text-neutral-700">
                Failed to load rooms. Please try again later.
              </div>
            ) : (
              roomsQuery.data?.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))
            )}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="link">
              <Link href="/rooms" className="inline-flex items-center text-primary">
                View All Accommodations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Amenities Section */}
      <section id="amenities" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-4">Hotel Amenities</h2>
            <p className="text-neutral-700 max-w-3xl mx-auto">
              Discover our range of services and facilities designed to enhance your stay and create unforgettable memories.
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenitiesQuery.isLoading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <Card key={index} className="p-6 bg-neutral-50">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-neutral-200 animate-pulse rounded-full"></div>
                    </div>
                    <div className="w-full">
                      <div className="h-6 bg-neutral-200 animate-pulse mb-2 w-2/3"></div>
                      <div className="h-4 bg-neutral-200 animate-pulse mb-1 w-full"></div>
                      <div className="h-4 bg-neutral-200 animate-pulse w-5/6"></div>
                    </div>
                  </div>
                </Card>
              ))
            ) : amenitiesQuery.error ? (
              <div className="col-span-3 text-center text-neutral-700">
                Failed to load amenities. Please try again later.
              </div>
            ) : (
              amenitiesQuery.data?.map((amenity) => (
                <AmenityCard key={amenity.id} amenity={amenity} />
              ))
            )}
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-4">Experience Grand Azure</h2>
            <p className="text-neutral-700 max-w-3xl mx-auto">
              Take a visual tour of our elegant hotel and discover the luxury that awaits you.
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryQuery.isLoading ? (
              Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="aspect-square bg-neutral-200 animate-pulse rounded-lg"></div>
              ))
            ) : galleryQuery.error ? (
              <div className="col-span-4 text-center text-neutral-700">
                Failed to load gallery. Please try again later.
              </div>
            ) : (
              galleryQuery.data?.map((item) => (
                <GalleryItemComponent key={item.id} item={item} />
              ))
            )}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="link">
              <Link href="/gallery" className="inline-flex items-center text-primary">
                View Full Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-4">Guest Experiences</h2>
            <p className="text-neutral-700 max-w-3xl mx-auto">
              Discover what our guests have to say about their stay at Grand Azure Hotel.
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsQuery.isLoading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <Card key={index} className="bg-neutral-50">
                  <CardContent className="p-6">
                    <div className="flex mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="w-5 h-5 mr-1 bg-neutral-200 animate-pulse"></div>
                      ))}
                    </div>
                    <div className="h-4 bg-neutral-200 animate-pulse mb-1 w-full"></div>
                    <div className="h-4 bg-neutral-200 animate-pulse mb-1 w-full"></div>
                    <div className="h-4 bg-neutral-200 animate-pulse mb-4 w-4/5"></div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-neutral-200 animate-pulse rounded-full"></div>
                      <div className="ml-3">
                        <div className="h-4 bg-neutral-200 animate-pulse mb-1 w-24"></div>
                        <div className="h-3 bg-neutral-200 animate-pulse w-32"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : testimonialsQuery.error ? (
              <div className="col-span-3 text-center text-neutral-700">
                Failed to load testimonials. Please try again later.
              </div>
            ) : (
              testimonialsQuery.data?.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))
            )}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-4">Contact Us</h2>
              <p className="text-neutral-700 max-w-3xl mx-auto">
                Have questions or ready to book your stay? Reach out to our team and we'll be happy to assist you.
              </p>
              <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <Card>
                  <CardContent className="p-8">
                    <h3 className="font-serif text-xl font-bold mb-6">Send Us a Message</h3>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card className="mb-8">
                  <CardContent className="p-8">
                    <h3 className="font-serif text-xl font-bold mb-6">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <MapPin className="text-white" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-medium">Address</p>
                          <p className="text-neutral-700">{CONTACT_INFO.address.street}</p>
                          <p className="text-neutral-700">
                            {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state} {CONTACT_INFO.address.zip}, {CONTACT_INFO.address.country}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <Phone className="text-white" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-medium">Phone</p>
                          <p className="text-neutral-700">{CONTACT_INFO.phone.main}</p>
                          <p className="text-neutral-700">{CONTACT_INFO.phone.reservations} (Reservations)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <Mail className="text-white" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-medium">Email</p>
                          <p className="text-neutral-700">{CONTACT_INFO.email.info}</p>
                          <p className="text-neutral-700">{CONTACT_INFO.email.reservations}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-8">
                    <h3 className="font-serif text-xl font-bold mb-6">Find Us</h3>
                    <div className="rounded-lg overflow-hidden h-64">
                      <img 
                        src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                        alt="1 Hotel Central Park NYC Location" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-4">
                      <p className="font-medium">1 Hotel Central Park</p>
                      <p className="text-sm text-neutral-600">1414 6th Avenue, New York, NY 10019</p>
                      <p className="text-sm text-neutral-600">Overlooking Central Park</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Begin Your Luxury Experience Today
            </h2>
            <p className="text-lg text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Book your stay at Grand Azure Hotel and discover what true luxury feels like. Special rates available for extended stays.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/rooms">Book Your Stay</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-black border-white hover:bg-transparent hover:text-black">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
