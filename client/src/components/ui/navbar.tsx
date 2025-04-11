import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "./button";
import { Menu, X, PhoneCall, Clock } from "lucide-react";

const Navbar = () => {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Top bar with contact info */}
      <div className="bg-neutral-900 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <PhoneCall className="h-4 w-4 mr-2 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-primary" />
                <span>24/7 Reception</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-sm hover:text-primary transition-colors">English</a>
              <span className="text-neutral-600">|</span>
              <Link href="/auth/sign-in" className="text-sm hover:text-primary transition-colors">Sign In</Link>
              <span className="text-neutral-600">|</span>
              <Link href="/auth/register" className="text-sm hover:text-primary transition-colors">Register</Link>
            </div>
          </div>
        </div>
      </div>
    
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="font-serif text-2xl font-bold bg-gradient-to-r from-amber-600 to-yellow-400 bg-clip-text text-transparent">Grand Azure</span>
                <span className="text-neutral-700 ml-1 text-lg">Hotel</span>
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${
                    location === link.href
                      ? "text-primary font-medium"
                      : "text-neutral-800 hover:text-primary"
                  } transition-colors duration-200 text-sm uppercase tracking-wider`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild variant="default" className="bg-gradient-to-r from-amber-600 to-yellow-400 text-white border-none font-medium">
                <Link href="/rooms">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute w-full">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-2 ${
                    location === link.href
                      ? "text-primary font-medium"
                      : "text-neutral-900 hover:text-primary"
                  } transition-colors duration-200`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="w-full mt-3 bg-gradient-to-r from-amber-600 to-yellow-400 text-white border-none">
                <Link href="/rooms">Book Now</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
