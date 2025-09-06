import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function RecentClicksSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1660351174962-e2a1fbb9af09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzY2llbmNlJTIwZmFpciUyMHN0dWRlbnRzfGVufDF8fHx8MTc1NjgzMTM2NXww&ixlib=rb-4.1.0&q=80&w=400&h=500",
      alt: "Science Fair"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1598389118600-9a83ceb4ebe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGFydCUyMGNsYXNzJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzU2ODMxMzY4fDA&ixlib=rb-4.1.0&q=80&w=400&h=500",
      alt: "Art Class"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1585915751878-f51978a77710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzcG9ydHMlMjBiYXNrZXRiYWxsfGVufDF8fHx8MTc1NjgzMDU5NXww&ixlib=rb-4.1.0&q=80&w=400&h=500",
      alt: "Basketball Game"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1565402161570-7ca09ba499f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBwbGF5Z3JvdW5kJTIwY2hpbGRyZW58ZW58MXx8fHwxNzU2ODMxMzYyfDA&ixlib=rb-4.1.0&q=80&w=400&h=500",
      alt: "Playground Activities"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1722248540590-ba8b7af1d7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwbGlicmFyeXxlbnwxfHx8fDE3NTY4MTc3ODB8MA&ixlib=rb-4.1.0&q=80&w=400&h=500",
      alt: "Library Study"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=500&fit=crop",
      alt: "Music Performance"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1667664873492-30c4867c92d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBjYW1wdXMlMjBhZXJpYWx8ZW58MXx8fHwxNzU2ODMxMzU2fDA&ixlib=rb-4.1.0&q=80&w=400&h=500",
      alt: "School Campus"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1598389118600-9a83ceb4ebe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGFydCUyMGNsYXNzJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzU2ODMxMzY4fDA&ixlib=rb-4.1.0&q=80&w=400&h=500",
      alt: "Creative Arts"
    }
  ];

  const cardsPerView = 4;
  const maxSlides = Math.ceil(images.length / cardsPerView);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % maxSlides);
    }, 3000);

    return () => clearInterval(timer);
  }, [maxSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  const getCardColor = (index: number) => {
    const colors = [
      'before:bg-gradient-to-t before:from-primary/80 before:to-transparent',
      'before:bg-gradient-to-t before:from-secondary/80 before:to-transparent',
      'before:bg-gradient-to-t before:from-destructive/80 before:to-transparent',
      'before:bg-gradient-to-t before:from-accent/80 before:to-transparent'
    ];
    return colors[index % colors.length];
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Recent Clicks
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Capturing memorable moments and vibrant life at Pranav Global School 
              through our lens.
            </p>
          </div>
          
          {/* Navigation Controls */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:bg-secondary hover:text-white"
              aria-label="Previous images"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:bg-secondary hover:text-white"
              aria-label="Next images"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Image Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {Array.from({ length: maxSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {images
                    .slice(slideIndex * cardsPerView, slideIndex * cardsPerView + cardsPerView)
                    .map((image, index) => (
                      <div
                        key={image.id}
                        className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer before:absolute before:inset-0 before:z-10 before:transition-opacity before:duration-300 before:opacity-0 hover:before:opacity-100 ${getCardColor(index)}`}
                        style={{
                          animationDelay: `${index * 0.1}s`
                        }}
                      >
                        <div className="relative h-80 overflow-hidden">
                          <ImageWithFallback
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          
                          {/* Animated border */}
                          <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-all duration-300"></div>
                          
                          {/* Floating animation dots */}
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex space-x-1">
                              <div className={`w-2 h-2 rounded-full animate-bounce ${index % 2 === 0 ? 'bg-white' : 'bg-secondary'}`} style={{ animationDelay: '0ms' }}></div>
                              <div className={`w-2 h-2 rounded-full animate-bounce ${index % 2 === 0 ? 'bg-secondary' : 'bg-white'}`} style={{ animationDelay: '150ms' }}></div>
                              <div className={`w-2 h-2 rounded-full animate-bounce ${index % 2 === 0 ? 'bg-white' : 'bg-destructive'}`} style={{ animationDelay: '300ms' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center items-center space-x-4 mt-8">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:bg-secondary hover:text-white"
            aria-label="Previous images"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <div className="flex space-x-2">
            {Array.from({ length: maxSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-secondary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-secondary/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:bg-secondary hover:text-white"
            aria-label="Next images"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}