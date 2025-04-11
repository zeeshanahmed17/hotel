import HeroSection from "@/components/hero-section";
import { SITE_NAME } from "@/lib/constants";

const TermsOfService = () => {
  return (
    <>
      <HeroSection 
        title="Terms of Service"
        description="Please read these terms carefully before using our services."
        image="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
        showButtons={false}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Terms of Service</h2>
            <p className="text-neutral-600">Last updated: April 9, 2025</p>
            
            <h3>1. Introduction</h3>
            <p>
              Welcome to {SITE_NAME}. By accessing our website, you agree to be bound by these Terms of Service. 
              If you disagree with any part of these terms, you may not access our services.
            </p>
            
            <h3>2. Use of Our Services</h3>
            <p>
              Our website offers hotel booking and reservation services. When making a reservation, you agree to 
              provide accurate and complete information. You are responsible for maintaining the confidentiality of your 
              account and for all activities that occur under your account.
            </p>
            
            <h3>3. Reservations and Cancellations</h3>
            <p>
              Reservations are subject to availability and our confirmation. Cancellation policies vary depending on the 
              room type and rate selected. Please refer to the specific cancellation policy displayed during the booking process.
            </p>
            <p>
              In general, cancellations must be made at least 48 hours prior to check-in to avoid charges. No-shows may be 
              charged the full amount of the reservation.
            </p>
            
            <h3>4. Pricing and Payment</h3>
            <p>
              All prices listed on our website are in U.S. Dollars unless otherwise specified. Prices are subject to change 
              without notice. Some rates may include taxes and fees, while others may not. We accept major credit cards and 
              process payments securely.
            </p>
            
            <h3>5. Property Rules and Regulations</h3>
            <p>
              Guests must abide by the rules and regulations of our property, including check-in/check-out times, noise 
              restrictions, and smoking policies. Failure to comply may result in additional charges or eviction without refund.
            </p>
            
            <h3>6. Intellectual Property</h3>
            <p>
              All content on our website, including text, graphics, logos, images, and software, is the property of {SITE_NAME} 
              or its content suppliers and is protected by international copyright laws. Unauthorized use of this content is prohibited.
            </p>
            
            <h3>7. Limitation of Liability</h3>
            <p>
              {SITE_NAME} is not liable for any direct, indirect, incidental, special, or consequential damages that result from 
              the use of, or the inability to use, our services. This includes damages for loss of profits, goodwill, use, or data.
            </p>
            
            <h3>8. Changes to Terms</h3>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any significant changes by posting 
              an announcement on our website or sending an email. Your continued use of our services after changes indicates your 
              acceptance of the new terms.
            </p>
            
            <h3>9. Governing Law</h3>
            <p>
              These terms are governed by the laws of the state of New York, United States, without regard to its conflict of law 
              principles. Any disputes arising from these terms shall be resolved in the courts of New York County.
            </p>
            
            <h3>10. Contact Information</h3>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p>
              {SITE_NAME}<br />
              1414 6th Avenue<br />
              New York, NY 10019<br />
              Email: legal@grandazurehotel.com<br />
              Phone: (212) 555-0123
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfService;