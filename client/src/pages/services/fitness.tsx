import HeroSection from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import { Clock, Dumbbell, User, Users, BarChart } from "lucide-react";

const Fitness = () => {
  return (
    <>
      <HeroSection 
        title="Fitness Center"
        description="Maintain your wellness routine in our state-of-the-art fitness facility with premium equipment and expert guidance."
        image="https://images.unsplash.com/photo-1637666233913-461904146f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
        showButtons={false}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">State-of-the-Art Fitness</h2>
              <p className="text-neutral-700 max-w-3xl mx-auto">
                Our cutting-edge fitness center is designed to help you maintain your wellness routine while traveling, offering the latest equipment and expert guidance.
              </p>
              <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
              <div className="order-2 lg:order-1">
                <h3 className="font-serif text-2xl font-bold mb-4">Premium Fitness Experience</h3>
                <p className="text-neutral-700 mb-6">
                  Our fitness center spans over 3,000 square feet and features top-of-the-line cardiovascular and strength training equipment 
                  from Technogym and Life Fitness. The spacious, light-filled environment is designed to inspire and energize, with panoramic 
                  views of the city skyline.
                </p>
                <p className="text-neutral-700 mb-6">
                  Whether you're maintaining your regular fitness routine or starting a new wellness journey, our fitness center provides 
                  everything you need for an effective and enjoyable workout.
                </p>
                <div className="flex items-center text-neutral-600 mb-4">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Open 24 hours for hotel guests</span>
                </div>
                <div className="flex items-center text-neutral-600 mb-6">
                  <Users className="h-5 w-5 mr-2" />
                  <span>Personal trainers available: 6:00 AM - 9:00 PM</span>
                </div>
                <Button asChild className="mt-2">
                  <Link href="/contact">Schedule a Session</Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1631049421450-348ccd7f8949?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                  alt="Fitness Center" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Fitness Services</h2>
              <p className="text-neutral-700 max-w-3xl mx-auto">
                Enhance your fitness journey with our specialized services and expert guidance.
              </p>
              <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {/* Personal Training */}
              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                      <User className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="font-serif text-xl font-bold">Personal Training</h3>
                  </div>
                  <p className="text-neutral-600 mb-4">
                    Our certified personal trainers provide one-on-one sessions tailored to your specific fitness goals and needs.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <div>
                        <span className="font-medium">Fitness Assessment</span>
                        <p className="text-sm text-neutral-500">60 min - $120</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <div>
                        <span className="font-medium">Single Personal Training Session</span>
                        <p className="text-sm text-neutral-500">60 min - $150</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <div>
                        <span className="font-medium">Package of 5 Sessions</span>
                        <p className="text-sm text-neutral-500">60 min each - $650</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <div>
                        <span className="font-medium">Couple's Training</span>
                        <p className="text-sm text-neutral-500">60 min - $220</p>
                      </div>
                    </li>
                  </ul>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/contact">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Group Classes */}
              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="font-serif text-xl font-bold">Group Classes</h3>
                  </div>
                  <p className="text-neutral-600 mb-4">
                    Join our energizing group fitness classes led by expert instructors in our dedicated studio space.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <div>
                        <span className="font-medium">Morning Yoga</span>
                        <p className="text-sm text-neutral-500">Daily, 7:00 AM - 8:00 AM</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <div>
                        <span className="font-medium">HIIT Circuit</span>
                        <p className="text-sm text-neutral-500">Mon/Wed/Fri, 6:00 PM - 7:00 PM</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <div>
                        <span className="font-medium">Core Strength</span>
                        <p className="text-sm text-neutral-500">Tue/Thu, 5:30 PM - 6:15 PM</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <div>
                        <span className="font-medium">Pilates</span>
                        <p className="text-sm text-neutral-500">Sat/Sun, 9:00 AM - 10:00 AM</p>
                      </div>
                    </li>
                  </ul>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/contact">View Schedule</Link>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Fitness Programs */}
              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                      <BarChart className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="font-serif text-xl font-bold">Fitness Programs</h3>
                  </div>
                  <p className="text-neutral-600 mb-4">
                    Our specialized fitness programs offer structured approaches to help you achieve specific wellness goals.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <div>
                        <span className="font-medium">Executive Fitness</span>
                        <p className="text-sm text-neutral-500">5-day program - $650</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <div>
                        <span className="font-medium">Wellness Retreat</span>
                        <p className="text-sm text-neutral-500">3-day program - $450</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <div>
                        <span className="font-medium">Strength Training</span>
                        <p className="text-sm text-neutral-500">1-week program - $520</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs mr-2 mt-0.5">•</span>
                      <div>
                        <span className="font-medium">Cardiovascular Health</span>
                        <p className="text-sm text-neutral-500">1-week program - $480</p>
                      </div>
                    </li>
                  </ul>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/contact">Learn More</Link>
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
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Equipment & Facilities</h2>
              <p className="text-neutral-700 max-w-3xl mx-auto">
                Our fitness center is equipped with premium machines and amenities to support your workout needs.
              </p>
              <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="group relative rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                  alt="Cardio Equipment" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white font-bold text-xl mb-2">Cardio Zone</h3>
                  <p className="text-white/90 text-sm">Featuring treadmills, ellipticals, stationary bikes, and rowing machines with integrated entertainment systems.</p>
                </div>
              </div>
              
              <div className="group relative rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1652291558-9efefb28c936?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                  alt="Strength Training Area" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white font-bold text-xl mb-2">Strength Zone</h3>
                  <p className="text-white/90 text-sm">Comprehensive strength training equipment including free weights, weight machines, and functional training apparatus.</p>
                </div>
              </div>
              
              <div className="group relative rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1590487988256-9ed24133863e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1128&q=80" 
                  alt="Studio Space" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white font-bold text-xl mb-2">Fitness Studio</h3>
                  <p className="text-white/90 text-sm">Dedicated space for group classes and personal training sessions with mirrors and specialized equipment.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-neutral-700 mb-6">
                The fitness center is complimentary for all hotel guests. Day passes and memberships are available for non-guests.
              </p>
              <Button asChild className="px-8 py-6 rounded-lg text-base">
                <Link href="/contact">Contact Our Fitness Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fitness;