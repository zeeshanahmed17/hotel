import { useQuery } from "@tanstack/react-query";
import { type GalleryItem } from "@shared/schema";
import GalleryItemComponent from "@/components/gallery-item";
import HeroSection from "@/components/hero-section";
import { useState, useMemo } from "react";

// Function to categorize gallery items based on title keywords
const categorizeLookup = {
  "rooms": ["Suite", "Room", "Presidential", "Bedroom", "Bathroom"],
  "dining": ["Dining", "Restaurant", "Bar", "Café", "Breakfast", "Kitchen"],
  "facilities": ["Pool", "Spa", "Fitness", "Gym", "Center", "Lobby"],
  "events": ["Ballroom", "Conference", "Event", "Wedding", "Meeting"]
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { data: galleryItems, isLoading, error } = useQuery<GalleryItem[]>({ 
    queryKey: ['/api/gallery'] 
  });

  const galleryCategories = [
    { id: 'all', name: 'All' },
    { id: 'rooms', name: 'Rooms & Suites' },
    { id: 'dining', name: 'Dining' },
    { id: 'facilities', name: 'Facilities' },
    { id: 'events', name: 'Events' }
  ];
  
  // Filter gallery items based on active category
  const filteredItems = useMemo(() => {
    if (!galleryItems || activeCategory === 'all') {
      return galleryItems;
    }
    
    return galleryItems.filter(item => {
      const keywords = categorizeLookup[activeCategory as keyof typeof categorizeLookup] || [];
      return keywords.some(keyword => 
        item.title.toLowerCase().includes(keyword.toLowerCase())
      );
    });
  }, [galleryItems, activeCategory]);

  return (
    <>
      <HeroSection 
        title="Our Gallery"
        description="Take a visual tour through our elegant spaces, luxurious accommodations, and exceptional amenities."
        image="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
        showButtons={false}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-4">Image Gallery</h2>
              <p className="text-neutral-700 max-w-3xl mx-auto">
                Browse through our collection of images showcasing the beauty and elegance of Grand Azure Hotel.
              </p>
              <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {galleryCategories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 ${
                    category.id === activeCategory
                      ? 'bg-primary text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            {isLoading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Array.from({ length: 12 }).map((_, index) => (
                  <div key={index} className="aspect-square bg-neutral-200 animate-pulse rounded-lg"></div>
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-red-500">Failed to load gallery images. Please try again later.</p>
              </div>
            ) : filteredItems?.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-neutral-600">No images found in this category. Try selecting a different category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredItems?.map((item) => (
                  <GalleryItemComponent key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
