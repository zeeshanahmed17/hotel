import { useState } from "react";
import { type GalleryItem } from "@shared/schema";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

interface GalleryItemProps {
  item: GalleryItem;
}

const GalleryItemComponent = ({ item }: GalleryItemProps) => {
  const { title, imageUrl } = item;
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div 
          className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img 
            src={imageUrl} 
            alt={title} 
            className={`w-full h-full object-cover transition duration-500 ${isHovered ? 'scale-110' : ''}`}
          />
          <div className={`absolute inset-0 bg-black transition duration-300 ${isHovered ? 'opacity-40' : 'opacity-0'}`}></div>
          <div className={`absolute inset-0 flex items-center justify-center transition duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-white font-medium">{title}</span>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-auto"
        />
      </DialogContent>
    </Dialog>
  );
};

export default GalleryItemComponent;
