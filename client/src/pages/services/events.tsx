import HeroSection from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import { Calendar, Users, Landmark, PartyPopper } from "lucide-react";

const Events = () => {
  return (
    <>
      <HeroSection 
        title="Event Spaces"
        description="Elegant venues for memorable occasions, from intimate gatherings to grand celebrations."
        image="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1498&q=80"
        showButtons={false}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Extraordinary Venues</h2>
              <p className="text-neutral-700 max-w-3xl mx-auto">
                From elegant ballrooms to intimate meeting spaces, our versatile venues provide the perfect backdrop for any event.
              </p>
              <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
            </div>
            
            {/* Grand Ballroom */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1498&q=80" 
                  alt="Grand Ballroom" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <Landmark className="h-6 w-6 text-amber-600 mr-2" />
                  <h3 className="font-serif text-2xl font-bold">Grand Ballroom</h3>
                </div>
                <p className="text-neutral-700 mb-4">
                  Our magnificent Grand Ballroom offers an elegant setting for the most prestigious events. With soaring ceilings, 
                  crystal chandeliers, and sophisticated décor, this versatile space can be transformed to suit your vision—whether 
                  for a lavish wedding reception, gala dinner, or corporate awards ceremony.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-neutral-50 p-3 rounded-lg">
                    <span className="block text-neutral-900 font-medium mb-1">Size</span>
                    <span className="text-neutral-600">6,000 sq. ft.</span>
                  </div>
                  <div className="bg-neutral-50 p-3 rounded-lg">
                    <span className="block text-neutral-900 font-medium mb-1">Capacity</span>
                    <span className="text-neutral-600">350 Reception / 280 Banquet</span>
                  </div>
                  <div className="bg-neutral-50 p-3 rounded-lg">
                    <span className="block text-neutral-900 font-medium mb-1">Features</span>
                    <span className="text-neutral-600">State-of-the-art AV, Dividable</span>
                  </div>
                  <div className="bg-neutral-50 p-3 rounded-lg">
                    <span className="block text-neutral-900 font-medium mb-1">Ceiling Height</span>
                    <span className="text-neutral-600">18 feet</span>
                  </div>
                </div>
                <Button asChild className="mt-4 w-fit">
                  <Link href="/contact">Request Information</Link>
                </Button>
              </div>
            </div>
            
            {/* Azure Meeting Rooms */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
              <div className="flex flex-col justify-center order-2 lg:order-1">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-amber-600 mr-2" />
                  <h3 className="font-serif text-2xl font-bold">Azure Meeting Suites</h3>
                </div>
                <p className="text-neutral-700 mb-4">
                  Our collection of Azure Meeting Suites provides flexible spaces for productive business gatherings. 
                  Each room features natural light, ergonomic furniture, and integrated technology to facilitate seamless presentations 
                  and discussions. These versatile spaces are ideal for board meetings, strategic planning sessions, and training workshops.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-neutral-50 p-3 rounded-lg">
                    <span className="block text-neutral-900 font-medium mb-1">Size</span>
                    <span className="text-neutral-600">400-800 sq. ft. each</span>
                  </div>
                  <div className="bg-neutral-50 p-3 rounded-lg">
                    <span className="block text-neutral-900 font-medium mb-1">Capacity</span>
                    <span className="text-neutral-600">10-30 people</span>
                  </div>
                  <div className="bg-neutral-50 p-3 rounded-lg">
                    <span className="block text-neutral-900 font-medium mb-1">Features</span>
                    <span className="text-neutral-600">Video conferencing, Digital whiteboards</span>
                  </div>
                  <div className="bg-neutral-50 p-3 rounded-lg">
                    <span className="block text-neutral-900 font-medium mb-1">Available</span>
                    <span className="text-neutral-600">4 meeting rooms</span>
                  </div>
                </div>
                <Button asChild className="mt-4 w-fit">
                  <Link href="/contact">Request Information</Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                  alt="Azure Meeting Suites" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Rooftop Terrace */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                  alt="Rooftop Terrace" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <PartyPopper className="h-6 w-6 text-amber-600 mr-2" />
                  <h3 className="font-serif text-2xl font-bold">Skyline Rooftop Terrace</h3>
                </div>
                <p className="text-neutral-700 mb-4">
                  Our stunning Skyline Rooftop Terrace offers a breathtaking outdoor venue with panoramic city views. 
                  This exceptional space is perfect for cocktail receptions, intimate weddings, and special celebrations. 
                  The lush greenery, ambient lighting, and sophisticated design create an unforgettable setting for your event.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-neutral-50 p-3 rounded-lg">
                    <span className="block text-neutral-900 font-medium mb-1">Size</span>
                    <span className="text-neutral-600">2,500 sq. ft.</span>
                  </div>
                  <div className="bg-neutral-50 p-3 rounded-lg">
                    <span className="block text-neutral-900 font-medium mb-1">Capacity</span>
                    <span className="text-neutral-600">150 Reception / 80 Seated</span>
                  </div>
                  <div className="bg-neutral-50 p-3 rounded-lg">
                    <span className="block text-neutral-900 font-medium mb-1">Features</span>
                    <span className="text-neutral-600">Outdoor bar, Lounge seating</span>
                  </div>
                  <div className="bg-neutral-50 p-3 rounded-lg">
                    <span className="block text-neutral-900 font-medium mb-1">Weather</span>
                    <span className="text-neutral-600">Seasonal with indoor backup</span>
                  </div>
                </div>
                <Button asChild className="mt-4 w-fit">
                  <Link href="/contact">Request Information</Link>
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
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Event Services</h2>
              <p className="text-neutral-700 max-w-3xl mx-auto">
                Our dedicated team of event professionals will help you create a seamless and memorable experience for your guests.
              </p>
              <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <Card className="hover:shadow-md transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519690889869-e705e59f72e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                    alt="Culinary Excellence" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-3">Culinary Excellence</h3>
                  <p className="text-neutral-600 mb-6">
                    Our talented culinary team creates custom menus featuring locally sourced ingredients and innovative presentations. 
                    From elegant plated dinners to interactive food stations, we offer exceptional catering for any event style.
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    <li>• Custom menu planning</li>
                    <li>• Dietary accommodation</li>
                    <li>• Wine and beverage pairing</li>
                    <li>• Themed culinary experiences</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                    alt="Event Planning" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-3">Event Planning</h3>
                  <p className="text-neutral-600 mb-6">
                    Our experienced event planners provide comprehensive support, from initial concept to flawless execution. 
                    We coordinate every detail to bring your vision to life and ensure a successful event.
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    <li>• Dedicated event manager</li>
                    <li>• Vendor coordination</li>
                    <li>• Floor plan design</li>
                    <li>• Timeline management</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                    alt="Technical Support" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-3">Technical Support</h3>
                  <p className="text-neutral-600 mb-6">
                    Our state-of-the-art audiovisual equipment and technical support ensure your presentations, entertainment, 
                    and communication needs are seamlessly integrated into your event.
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    <li>• High-definition projectors</li>
                    <li>• Professional sound systems</li>
                    <li>• Lighting design</li>
                    <li>• Video conferencing</li>
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
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Special Events</h2>
              <p className="text-neutral-700 max-w-3xl mx-auto">
                Our venues provide the perfect setting for life's most important celebrations and gatherings.
              </p>
              <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="group relative rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80" 
                  alt="Weddings" 
                  className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white font-bold text-xl mb-2">Weddings</h3>
                  <p className="text-white/90 text-sm">Create the wedding of your dreams with our customizable packages and elegant venues.</p>
                </div>
              </div>
              
              <div className="group relative rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                  alt="Corporate Events" 
                  className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white font-bold text-xl mb-2">Corporate</h3>
                  <p className="text-white/90 text-sm">From conferences to team building, we provide professional settings for business events.</p>
                </div>
              </div>
              
              <div className="group relative rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1084&q=80" 
                  alt="Social Gatherings" 
                  className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white font-bold text-xl mb-2">Social</h3>
                  <p className="text-white/90 text-sm">Celebrate milestone birthdays, anniversaries, and special occasions with style.</p>
                </div>
              </div>
              
              <div className="group relative rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&auto=format&fit=crop&w=1210&q=80" 
                  alt="Galas & Fundraisers" 
                  className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white font-bold text-xl mb-2">Galas</h3>
                  <p className="text-white/90 text-sm">Host sophisticated fundraisers and charity events in our prestigious spaces.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild className="px-8 py-6 rounded-lg text-base">
                <Link href="/contact">Plan Your Event</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;