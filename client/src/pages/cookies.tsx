import HeroSection from "@/components/hero-section";
import { SITE_NAME } from "@/lib/constants";

const CookiePolicy = () => {
  return (
    <>
      <HeroSection 
        title="Cookie Policy"
        description="Learn how we use cookies to improve your experience on our website."
        image="https://images.unsplash.com/photo-1621976400679-906d43577db6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
        showButtons={false}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Cookie Policy</h2>
            <p className="text-neutral-600">Last updated: April 9, 2025</p>
            
            <h3>1. What Are Cookies</h3>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently, as well as to provide information to the owners 
              of the site. Cookies help us enhance your experience on our website and deliver personalized content.
            </p>
            
            <h3>2. How We Use Cookies</h3>
            <p>
              {SITE_NAME} uses cookies for various purposes, including:
            </p>
            <ul>
              <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly and cannot be switched off in our systems. They are usually set in response to actions made by you, such as setting your privacy preferences, logging in, or filling in forms.</li>
              <li><strong>Performance Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site.</li>
              <li><strong>Functional Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</li>
              <li><strong>Targeting Cookies:</strong> These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.</li>
            </ul>
            
            <h3>3. Types of Cookies We Use</h3>
            <p>
              The specific cookies we use include:
            </p>
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left">Cookie Name</th>
                  <th className="text-left">Purpose</th>
                  <th className="text-left">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>session_id</td>
                  <td>Manages user session and authentication</td>
                  <td>Session</td>
                </tr>
                <tr>
                  <td>preferences</td>
                  <td>Saves user preferences and customizations</td>
                  <td>1 year</td>
                </tr>
                <tr>
                  <td>_ga</td>
                  <td>Used by Google Analytics to distinguish users</td>
                  <td>2 years</td>
                </tr>
                <tr>
                  <td>_gid</td>
                  <td>Used by Google Analytics to distinguish users</td>
                  <td>24 hours</td>
                </tr>
              </tbody>
            </table>
            
            <h3>4. Managing Cookies</h3>
            <p>
              Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, 
              or to alert you when cookies are being sent. The methods for doing so vary from browser to browser, and 
              from version to version, but you can typically find this information in the browser's "Help" or "Settings" section.
            </p>
            <p>
              Please note that if you disable cookies, some features of our website may not function properly.
            </p>
            
            <h3>5. Third-Party Cookies</h3>
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics 
              and deliver advertisements. These third parties may include:
            </p>
            <ul>
              <li>Google Analytics</li>
              <li>Facebook</li>
              <li>Stripe (for payment processing)</li>
              <li>Advertising partners</li>
            </ul>
            
            <h3>6. Changes to Our Cookie Policy</h3>
            <p>
              We may update this Cookie Policy from time to time. We will notify you of any significant changes by 
              posting a notice on our website or sending you an email. The updated policy will be effective when it is 
              posted on this page.
            </p>
            
            <h3>7. Contact Us</h3>
            <p>
              If you have any questions about our Cookie Policy, please contact us at:
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

export default CookiePolicy;