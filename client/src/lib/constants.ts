export const SITE_NAME = "Grand Azure Hotel";
export const SITE_DESCRIPTION = "Experience luxury accommodation at Grand Azure Hotel. Book your stay at our elegant rooms and suites with stunning views and world-class amenities.";

// Navigation links
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" }
];

// Room types for booking form
export const ROOM_TYPES = [
  { value: "standard", label: "Standard Room" },
  { value: "deluxe", label: "Deluxe Room" },
  { value: "executive", label: "Executive Suite" },
  { value: "presidential", label: "Presidential Suite" }
];

// Guest numbers for booking form
export const GUEST_OPTIONS = [
  { value: "1", label: "1 Guest" },
  { value: "2", label: "2 Guests" },
  { value: "3", label: "3 Guests" },
  { value: "4", label: "4 Guests" },
  { value: "5", label: "5+ Guests" }
];

// Contact information
export const CONTACT_INFO = {
  address: {
    street: "1 Hotel Central Park, 1414 6th Avenue",
    city: "New York",
    state: "NY",
    zip: "10019",
    country: "USA"
  },
  phone: {
    main: "+1 (555) 123-4567",
    reservations: "+1 (555) 987-6543"
  },
  email: {
    info: "info@grandazurehotel.com",
    reservations: "reservations@grandazurehotel.com"
  },
  location: {
    lat: 40.764762,
    lng: -73.976439,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2027431720463!2d-73.97931692427258!3d40.764775536096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f9cfcb250d%3A0xdb570ddcb766e3a8!2s1%20Hotel%20Central%20Park!5e0!3m2!1sen!2sus!4v1710588348080!5m2!1sen!2sus"
  }
};

// Social media links
export const SOCIAL_LINKS = [
  { platform: "facebook", url: "https://facebook.com" },
  { platform: "twitter", url: "https://twitter.com" },
  { platform: "instagram", url: "https://instagram.com" },
  { platform: "pinterest", url: "https://pinterest.com" }
];

// Footer links
export const FOOTER_LINKS = {
  quickLinks: [
    { href: "/", label: "Home" },
    { href: "/rooms", label: "Our Rooms" },
    { href: "/about", label: "About Us" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" }
  ],
  services: [
    { href: "/services/accommodation", label: "Accommodation" },
    { href: "/services/dining", label: "Restaurant & Bar" },
    { href: "/services/spa", label: "Spa & Wellness" },
    { href: "/services/fitness", label: "Fitness Center" },
    { href: "/services/events", label: "Event Spaces" },
    { href: "/services/concierge", label: "Concierge Services" }
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/cookies", label: "Cookie Policy" }
  ]
};

// Hero section data
export const HERO_DATA = {
  image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  title: "Experience Luxury Like Never Before",
  description: "Welcome to Grand Azure Hotel, where elegance meets comfort and every stay becomes an unforgettable memory."
};

// About section data
export const ABOUT_DATA = {
  title: "Welcome to Grand Azure Hotel",
  description: [
    "Nestled in the heart of the city, Grand Azure Hotel has been a symbol of luxury and elegance since 1985. Our commitment to providing exceptional service and creating memorable experiences has made us a preferred choice for discerning travelers from around the world.",
    "From our meticulously designed rooms to our world-class dining options, every aspect of Grand Azure is crafted to exceed your expectations. Our dedicated staff ensures that your stay is nothing short of perfect."
  ],
  features: [
    "24/7 personalized concierge service",
    "Award-winning restaurants and bars",
    "Luxury spa and wellness center",
    "State-of-the-art fitness facilities"
  ],
  images: [
    {
      src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      alt: "Hotel Exterior"
    },
    {
      src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      alt: "Hotel Restaurant"
    },
    {
      src: "https://images.unsplash.com/photo-1621293954908-907159247fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      alt: "Hotel Spa"
    },
    {
      src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      alt: "Hotel Pool"
    }
  ]
};
