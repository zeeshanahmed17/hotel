import { Link } from "wouter";
import { 
  FOOTER_LINKS, 
  SITE_NAME, 
  CONTACT_INFO, 
  SOCIAL_LINKS 
} from "@/lib/constants";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  MapPin, 
  Phone, 
  Mail, 
  Check 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return <Facebook className="w-5 h-5" />;
      case "twitter":
        return <Twitter className="w-5 h-5" />;
      case "instagram":
        return <Instagram className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <Link href="/" className="flex items-center">
                <span className="font-serif text-2xl font-bold text-white">Grand Azure</span>
                <span className="text-amber-500 ml-1 text-lg">Hotel</span>
              </Link>
            </div>
            <p className="text-neutral-400 mb-6">
              Experience luxury accommodation at its finest. Grand Azure Hotel offers unmatched service and amenities in the heart of the city.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-amber-500 transition duration-300"
                  aria-label={`Follow us on ${link.platform}`}
                >
                  {getSocialIcon(link.platform)}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-neutral-400 hover:text-white transition duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href} 
                    className="text-neutral-400 hover:text-white transition duration-300"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-neutral-400">
                  {CONTACT_INFO.address.street}<br />
                  {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state} {CONTACT_INFO.address.zip}, {CONTACT_INFO.address.country}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                <span className="text-neutral-400">{CONTACT_INFO.phone.main}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                <span className="text-neutral-400">{CONTACT_INFO.email.info}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {FOOTER_LINKS.legal.map((link, index) => (
              <Link 
                key={index} 
                href={link.href} 
                className="text-neutral-400 hover:text-white text-sm transition duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
