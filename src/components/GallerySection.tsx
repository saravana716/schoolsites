import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Users, Award, Music, Beaker, BookOpen } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { PageHeader } from './PageHeader';
import Masonry from 'react-responsive-masonry';

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos', icon: Users },
    { id: 'academics', name: 'Academics', icon: BookOpen },
    { id: 'sports', name: 'Sports', icon: Award },
    { id: 'events', name: 'Events', icon: Calendar },
    { id: 'arts', name: 'Arts & Culture', icon: Music },
    { id: 'science', name: 'Science', icon: Beaker }
  ];

  const galleryImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1636386689060-37d233b5d345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzY2llbmNlJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NTY4MzA1OTB8MA&ixlib=rb-4.1.0&q=80&w=400&h=600",
      title: "Students in Science Lab",
      category: "science",
      date: "March 2024",
      description: "Students conducting chemistry experiments in our state-of-the-art laboratory."
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1585915751878-f51978a77710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzcG9ydHMlMjBiYXNrZXRiYWxsfGVufDF8fHx8MTc1NjgzMDU5NXww&ixlib=rb-4.1.0&q=80&w=400&h=300",
      title: "Basketball Championship",
      category: "sports",
      date: "February 2024",
      description: "Our team celebrating victory in the regional basketball championship."
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNsYXNzcm9vbSUyMGxlYXJuaW5nfGVufDF8fHx8MTc1NjgzMDU4NHww&ixlib=rb-4.1.0&q=80&w=400&h=500",
      title: "Library Study Session",
      category: "academics",
      date: "January 2024",
      description: "Students engaged in collaborative learning in our modern library."
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      title: "Digital Learning",
      category: "academics",
      date: "March 2024",
      description: "Interactive learning session using smart classroom technology."
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1686213011698-8e70cb7ed011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBzdHVkZW50c3xlbnwxfHx8fDE3NTY3NzQ4Mzl8MA&ixlib=rb-4.1.0&q=80&w=400&h=300",
      title: "Graduation Ceremony",
      category: "events",
      date: "June 2023",
      description: "Celebrating our graduates' achievements at the annual ceremony."
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=450&fit=crop",
      title: "Computer Programming Class",
      category: "academics",
      date: "February 2024",
      description: "Students learning coding and programming in our computer lab."
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=350&fit=crop",
      title: "Swimming Competition",
      category: "sports",
      date: "January 2024",
      description: "Annual inter-school swimming competition at our aquatic center."
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop",
      title: "Art Exhibition",
      category: "arts",
      date: "December 2023",
      description: "Student artwork displayed at our annual art exhibition."
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1603958956194-cf9718dba4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBidWlsZGluZ3xlbnwxfHx8fDE3NTY3NzMwODR8MA&ixlib=rb-4.1.0&q=80&w=400&h=300",
      title: "Modern Campus Building",
      category: "academics",
      date: "March 2024",
      description: "Our state-of-the-art campus building with modern architecture."
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=450&fit=crop",
      title: "Physics Laboratory",
      category: "science",
      date: "February 2024",
      description: "Advanced physics experiments being conducted by senior students."
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop",
      title: "Group Study",
      category: "academics",
      date: "January 2024",
      description: "Collaborative learning session in our comfortable study areas."
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=350&fit=crop",
      title: "Music Performance",
      category: "arts",
      date: "November 2023",
      description: "Students performing at the annual music concert."
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image: any) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div>
      <PageHeader title="Gallery" currentPage="Gallery" />
      <div className="py-20 bg-background">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              School Gallery
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore life at Branov School through our photo gallery showcasing 
              student achievements, campus events, and daily activities.
            </p>
          </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-secondary text-white shadow-lg'
                  : 'bg-muted text-muted-foreground hover:bg-secondary/20 hover:text-secondary'
              }`}
            >
              <category.icon className="h-4 w-4" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Masonry Gallery */}
        <Masonry columnsCount={3} gutter="16px">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(image)}
            >
              <ImageWithFallback
                src={image.url}
                alt={image.title}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold mb-1">{image.title}</h3>
                  <p className="text-white/80 text-sm">{image.date}</p>
                </div>
              </div>
            </div>
          ))}
        </Masonry>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image */}
              <ImageWithFallback
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain"
              />

              {/* Image info */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-white font-semibold text-lg mb-2">{selectedImage.title}</h3>
                <p className="text-white/80 text-sm mb-1">{selectedImage.description}</p>
                <p className="text-white/60 text-sm">{selectedImage.date}</p>
              </div>
            </div>
          </div>
        )}

        {/* Statistics */}
        <div className="mt-16 bg-muted/30 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">500+</div>
              <div className="text-muted-foreground">Photos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">50+</div>
              <div className="text-muted-foreground">Events</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">25+</div>
              <div className="text-muted-foreground">Achievements</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">100+</div>
              <div className="text-muted-foreground">Activities</div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}