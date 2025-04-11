import HeroSection from "@/components/hero-section";
import { SITE_NAME } from "@/lib/constants";

const PrivacyPolicy = () => {
  return (
    <>
      <HeroSection 
        title="Privacy Policy"
        description="How we collect, use, and protect your personal information."
        image="https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
        showButtons={false}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Privacy Policy</h2>
            <p className="text-neutral-600">Last updated: April 9, 2025</p>
            
            <h3>1. Introduction</h3>
            <p>
              At {SITE_NAME}, we value your privacy and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
              website or use our services. Please read this policy carefully.
            </p>
            
            <h3>2. Information We Collect</h3>
            <p>
              We may collect several types of information, including:
            </p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, postal address, date of birth, payment information, and other details you provide when making a reservation or creating an account.</li>
              <li><strong>Booking Information:</strong> Details about your stay, including dates, room preferences, special requests, and other accommodation-related information.</li>
              <li><strong>Technical Information:</strong> IP address, browser type, operating system, device information, browsing actions, and patterns.</li>
              <li><strong>Usage Information:</strong> Information about how you use our website, products, and services.</li>
              <li><strong>Marketing Information:</strong> Your preferences in receiving marketing from us and our third parties.</li>
            </ul>
            
            <h3>3. How We Use Your Information</h3>
            <p>
              We use your information for various purposes, including:
            </p>
            <ul>
              <li>Processing your reservations and requests</li>
              <li>Creating and managing your account</li>
              <li>Personalizing your experience on our website</li>
              <li>Providing customer service and support</li>
              <li>Sending administrative information</li>
              <li>Sending marketing and promotional communications (if you have opted in)</li>
              <li>Improving our website, products, and services</li>
              <li>Complying with legal obligations</li>
            </ul>
            
            <h3>4. Sharing Your Information</h3>
            <p>
              We may share your information with:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> Companies that perform services on our behalf, such as payment processing, data analysis, email delivery, and customer service.</li>
              <li><strong>Business Partners:</strong> Trusted partners who help us provide and improve our services.</li>
              <li><strong>Legal Entities:</strong> When required by law, to protect our rights, or in connection with a business transfer.</li>
            </ul>
            <p>
              We do not sell your personal information to third parties.
            </p>
            
            <h3>5. Data Security</h3>
            <p>
              We have implemented appropriate technical and organizational measures to secure your personal information. 
              However, no electronic transmission or storage system is completely secure, and we cannot guarantee absolute security.
            </p>
            
            <h3>6. Your Privacy Rights</h3>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li>The right to access your personal information</li>
              <li>The right to rectify or update your personal information</li>
              <li>The right to erase your personal information</li>
              <li>The right to restrict or object to processing</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided below.
            </p>
            
            <h3>7. Children's Privacy</h3>
            <p>
              Our website is not intended for children under 16 years of age, and we do not knowingly collect personal 
              information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
            
            <h3>8. International Data Transfers</h3>
            <p>
              Your information may be transferred to, and processed in, countries other than the one in which you reside. 
              These countries may have different data protection laws. We ensure appropriate safeguards are in place to protect your information.
            </p>
            
            <h3>9. Changes to This Privacy Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
            </p>
            
            <h3>10. Contact Us</h3>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <p>
              {SITE_NAME}<br />
              1414 6th Avenue<br />
              New York, NY 10019<br />
              Email: privacy@grandazurehotel.com<br />
              Phone: (212) 555-0123
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;