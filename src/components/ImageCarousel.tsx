import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, ExternalLink } from "lucide-react";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Thumbnails and Posters images
  const images = [
    // Thumbnails
    { src: "/uploads/thumbnail.png", name: "Video Thumbnail 1" },
    { src: "/uploads/Thumbnail1.png", name: "Video Thumbnail 2" },
    { src: "/uploads/thumbnail2.png", name: "Video Thumbnail 3" },
    { src: "/uploads/thumbnail3.png", name: "Video Thumbnail 4" },
    { src: "/uploads/thumbnail4.png", name: "Video Thumbnail 5" },
    // Posters
    { src: "/uploads/Dance Poster.png", name: "Dance Event Poster" },
    { src: "/uploads/Dance Poster2.png", name: "Dance Performance Poster" },
    { src: "/uploads/Dance Information .png", name: "Event Information Design" },
    { src: "/uploads/Dance No Parking Board.png", name: "Event Signage Design" },
    { src: "/uploads/Burger Poster.jpg", name: "Food poster Design - Burger" },
    { src: "/uploads/Cars.png", name: "Automotive poster Design" },
    { src: "/uploads/intro page.png", name: "Brand Introduction Design" },
    { src: "/uploads/intro.png", name: "Company Introduction Visual" },
    { src: "/uploads/introo.png", name: "Brand Identity Design" },
  ];

  // Autoplay logic
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }, 4000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused, images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
    setIsPaused(true);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    setIsPaused(true);
  };

  const scrollLeft = () => {
    const container = document.getElementById('image-carousel');
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('image-carousel');
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our curated gallery of professional thumbnails and posters, showcasing our creative visual work.
          </p>
        </div>
        {/* Main Featured Image */}
        <div className="relative mb-12">
          <div className="max-h-[600px] rounded-lg overflow-hidden shadow-2xl bg-background">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].name}
              className="w-full h-auto max-h-[600px] object-contain mx-auto"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            />
          </div>
          {/* Image Name/Caption */}
          <div className="mt-4 text-center">
            <h3 className="text-xl font-semibold text-foreground">{images[currentIndex].name}</h3>
          </div>
          {/* Navigation for main image */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
          {/* Image counter */}
          <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
        {/* Thumbnail Carousel */}
        <div className="relative">
          <div 
            id="image-carousel"
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {images.map((image, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 cursor-pointer group"
                onClick={() => { setCurrentIndex(index); setIsPaused(true); }}
              >
                <div className={`relative w-32 md:w-40 h-24 md:h-28 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  currentIndex === index 
                    ? 'border-primary shadow-lg' 
                    : 'border-border/50 hover:border-primary/50'
                }`}>
                  <img
                    src={image.src}
                    alt={image.name}
                    className="w-full h-full object-contain bg-background group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 transition-opacity duration-300 ${
                    currentIndex === index 
                      ? 'bg-primary/20' 
                      : 'bg-black/0 group-hover:bg-black/20'
                  }`} />
                </div>
                {/* Thumbnail Name */}
                <div className="mt-2 text-center">
                  <p className="text-xs text-muted-foreground truncate max-w-32 md:max-w-40">
                    {image.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Navigation arrows for thumbnail carousel */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            onClick={scrollLeft}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            onClick={scrollRight}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel; 