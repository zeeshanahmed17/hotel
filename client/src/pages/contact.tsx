import HeroSection from "@/components/hero-section";
import ContactForm from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

const Contact = () => {
  return (
    <>
      <HeroSection 
        title="Contact Us"
        description="Have questions or ready to book your stay? Get in touch with our team and we'll be happy to assist you."
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        showButtons={false}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-4">Get In Touch</h2>
              <p className="text-neutral-700 max-w-3xl mx-auto">
                We'd love to hear from you. Feel free to reach out with any questions, feedback, or booking inquiries.
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
              
              <div className="space-y-6">
                <Card>
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
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <Clock className="text-white" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-medium">Hours</p>
                          <p className="text-neutral-700">Front Desk: 24/7</p>
                          <p className="text-neutral-700">Reservations: 8:00 AM - 10:00 PM</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <Globe className="text-white" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="font-medium">Website</p>
                          <p className="text-neutral-700">www.grandazurehotel.com</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-8">
                    <h3 className="font-serif text-xl font-bold mb-6">Find Us</h3>
                    <div className="rounded-lg overflow-hidden h-64 shadow-lg">
                      <iframe 
                        src={CONTACT_INFO.location.mapUrl}
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Hotel Location"
                        className="w-full h-full"
                      ></iframe>
                    </div>
                    <div className="mt-4 text-sm text-neutral-700">
                      <p className="font-medium text-primary">Located in the heart of Manhattan</p>
                      <p>Just steps away from Central Park and 5th Avenue shopping</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 text-left">
              <div>
                <h3 className="font-serif text-lg font-bold mb-2">What are your check-in and check-out times?</h3>
                <p className="text-neutral-700">
                  Check-in is available from 3:00 PM, and check-out is until 12:00 PM. Early check-in and late check-out can be arranged subject to availability.
                </p>
              </div>
              
              <div>
                <h3 className="font-serif text-lg font-bold mb-2">Is parking available at the hotel?</h3>
                <p className="text-neutral-700">
                  Yes, we offer both self-parking and valet parking options for our guests. Valet parking is complimentary for suite bookings.
                </p>
              </div>
              
              <div>
                <h3 className="font-serif text-lg font-bold mb-2">Do you offer airport transfers?</h3>
                <p className="text-neutral-700">
                  Yes, we provide airport transfer services. Please contact our concierge at least 24 hours in advance to arrange transportation.
                </p>
              </div>
              
              <div>
                <h3 className="font-serif text-lg font-bold mb-2">Is breakfast included in the room rate?</h3>
                <p className="text-neutral-700">
                  Breakfast is included for certain room types and package deals. Please check your specific booking details or contact us for more information.
                </p>
              </div>
              
              <div>
                <h3 className="font-serif text-lg font-bold mb-2">Is Wi-Fi available at the hotel?</h3>
                <p className="text-neutral-700">
                  Yes, complimentary high-speed Wi-Fi is available throughout the hotel for all guests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
