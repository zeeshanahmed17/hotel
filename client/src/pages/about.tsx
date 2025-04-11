import { ABOUT_DATA } from "@/lib/constants";
import HeroSection from "@/components/hero-section";
import { Check, Award, Clock, Users, ThumbsUp, Landmark } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { type Testimonial } from "@shared/schema";
import TestimonialCard from "@/components/testimonial-card";

const About = () => {
  const { data: testimonials, isLoading, error } = useQuery<Testimonial[]>({ 
    queryKey: ['/api/testimonials'] 
  });

  return (
    <>
      <HeroSection 
        title="About Grand Azure Hotel"
        description="Learn about our story, our mission, and our commitment to providing exceptional hospitality."
        image="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
        showButtons={false}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-4">Our Story</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                {ABOUT_DATA.description.map((paragraph, index) => (
                  <p key={index} className="text-neutral-700 mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  Founded in 1985, Grand Azure Hotel has established itself as a landmark of luxury and refinement. Our guiding principle has always been to create memorable experiences for our guests by combining elegant surroundings with personalized service.
                </p>
                
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
      
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-4">Why Choose Grand Azure</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Landmark className="text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Prime Location</h3>
                <p className="text-neutral-700">
                  Situated in the heart of the city, Grand Azure offers easy access to major attractions, shopping districts, and business centers.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Award className="text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Award-Winning Service</h3>
                <p className="text-neutral-700">
                  Our dedicated staff has received numerous industry accolades for their exceptional attention to detail and personalized service.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Clock className="text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Rich Heritage</h3>
                <p className="text-neutral-700">
                  With over 35 years of excellence, Grand Azure combines traditional hospitality values with modern luxury amenities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Users className="text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Expert Team</h3>
                <p className="text-neutral-700">
                  Our multilingual staff includes hospitality professionals from around the world, each bringing unique expertise to enhance your stay.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <ThumbsUp className="text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Sustainability</h3>
                <p className="text-neutral-700">
                  We are committed to environmentally responsible practices, from energy-efficient operations to locally sourced ingredients in our restaurants.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Users className="text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Community Involvement</h3>
                <p className="text-neutral-700">
                  Grand Azure actively participates in local initiatives and supports community development through various charitable programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-4">Our Milestones</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
            </div>
            
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="bg-primary text-white text-center py-3 px-4 rounded-md inline-block md:block">
                    <span className="font-serif text-xl font-bold">1985</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-serif text-xl font-bold mb-2">Grand Opening</h3>
                  <p className="text-neutral-700">Grand Azure Hotel opened its doors, introducing a new standard of luxury to the city.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="bg-primary text-white text-center py-3 px-4 rounded-md inline-block md:block">
                    <span className="font-serif text-xl font-bold">1998</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-serif text-xl font-bold mb-2">Major Renovation</h3>
                  <p className="text-neutral-700">The hotel underwent a significant expansion, adding the East Wing with premium suites and a rooftop pool.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="bg-primary text-white text-center py-3 px-4 rounded-md inline-block md:block">
                    <span className="font-serif text-xl font-bold">2008</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-serif text-xl font-bold mb-2">Five-Star Rating</h3>
                  <p className="text-neutral-700">Grand Azure received its first five-star rating from the International Hospitality Association.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="bg-primary text-white text-center py-3 px-4 rounded-md inline-block md:block">
                    <span className="font-serif text-xl font-bold">2015</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-serif text-xl font-bold mb-2">Luxury Spa Launch</h3>
                  <p className="text-neutral-700">The Azure Spa & Wellness Center opened, offering world-class treatments and facilities.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="bg-primary text-white text-center py-3 px-4 rounded-md inline-block md:block">
                    <span className="font-serif text-xl font-bold">2022</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-serif text-xl font-bold mb-2">Digital Transformation</h3>
                  <p className="text-neutral-700">Grand Azure embraced cutting-edge technology with a complete digital upgrade of all rooms and services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-4">Guest Testimonials</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {isLoading ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
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
                  </div>
                ))
              ) : error ? (
                <div className="col-span-3 text-center text-neutral-700">
                  Failed to load testimonials. Please try again later.
                </div>
              ) : (
                testimonials?.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
