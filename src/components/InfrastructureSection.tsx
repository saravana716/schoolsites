import { MapPin, Wifi, Building, Users } from 'lucide-react';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { PageHeader } from './PageHeader';

export function InfrastructureSection() {
  const infrastructureFeatures = [
    {
      icon: MapPin,
      title: "50 Acre Campus",
      description: "Spacious green campus with modern facilities",
      detailedDescription: "Our expansive 50-acre campus provides ample space for learning, recreation, and growth. The beautifully landscaped grounds include dedicated areas for academics, sports, and relaxation, creating an ideal environment for holistic education.",
      image: "https://images.unsplash.com/photo-1690204704223-4844fd31e2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGNhbXB1cyUyMGFlcmlhbCUyMHZpZXd8ZW58MXx8fHwxNzU2ODM1NjYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Landscaped Gardens", "Walking Paths", "Recreation Areas", "Natural Environment"]
    },
    {
      icon: Wifi,
      title: "Campus-wide WiFi",
      description: "High-speed internet throughout the campus",
      detailedDescription: "Stay connected with our comprehensive WiFi network that covers every corner of the campus. Students and faculty enjoy seamless internet access for research, learning, and communication across all buildings and outdoor areas.",
      image: "https://images.unsplash.com/photo-1730438447109-cf7888738bc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wdXMlMjB3aWRlJTIwd2lmaSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU2ODM1NjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["High-Speed Internet", "Complete Coverage", "Secure Network", "24/7 Availability"]
    },
    {
      icon: Building,
      title: "Modern Architecture",
      description: "Contemporary design with sustainable features",
      detailedDescription: "Our contemporary architectural design combines aesthetic appeal with functional excellence. The buildings feature sustainable materials, energy-efficient systems, and innovative design elements that create inspiring learning spaces.",
      image: "https://images.unsplash.com/photo-1645636648350-311121e25ad6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NTY4MzU2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Sustainable Design", "Energy Efficient", "Modern Facilities", "Eco-Friendly Materials"]
    },
    {
      icon: Users,
      title: "Community Spaces",
      description: "Common areas for student interaction and collaboration",
      detailedDescription: "Our thoughtfully designed community spaces encourage social interaction, collaboration, and personal development. These areas provide students with comfortable environments for group study, discussions, and building lasting friendships.",
      image: "https://images.unsplash.com/photo-1717307908098-cec3253b45a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvbW11bml0eSUyMHNwYWNlJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NTY4MzU2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Study Areas", "Social Spaces", "Collaboration Zones", "Comfortable Seating"]
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <PageHeader title="Infrastructure" currentPage="Infrastructure" />
      
      <div className="py-20 bg-background">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Introduction */}
          <div className="text-center mb-20">
            <Badge className="bg-primary/10 text-primary border-0 mb-6">
              OUR FACILITIES
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              World-Class Infrastructure
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our campus provides a modern, safe, and inspiring environment that supports 
              academic excellence and personal growth for every student.
            </p>
          </div>

          {/* Campus Features Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {infrastructureFeatures.map((feature, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-muted to-card rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-300 shadow-lg">
                  <feature.icon className="h-10 w-10 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <h3 className="font-bold text-foreground mb-3 text-lg">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Detailed Infrastructure Features */}
          <div className="space-y-24">
            {infrastructureFeatures.map((feature, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'}`}>
                {/* Image Section */}
                <div className={`relative ${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                  <div className="relative">
                    {/* Decorative elements */}
                    <div className={`absolute -top-8 ${index % 2 === 0 ? '-right-8' : '-left-8'} w-16 h-16 bg-secondary/20 rounded-full`}></div>
                    <div className={`absolute bottom-8 ${index % 2 === 0 ? '-left-8' : '-right-8'} w-24 h-24 bg-primary/10 rounded-lg rotate-45`}></div>
                    
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                      <ImageWithFallback
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                      
                      {/* Floating Icon */}
                      <div className={`absolute top-6 ${index % 2 === 0 ? 'left-6' : 'right-6'} w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg`}>
                        <feature.icon className="h-7 w-7 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`${index % 2 === 0 ? '' : 'lg:col-start-1'}`}>
                  <Badge className="bg-secondary/10 text-secondary border-0 mb-4">
                    INFRASTRUCTURE
                  </Badge>
                  <h3 className="text-3xl font-bold text-foreground mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                    {feature.detailedDescription}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground mb-4">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {feature.features.map((featureItem, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                          <span className="text-muted-foreground">{featureItem}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Progress indicator */}
                  <div className="flex items-center space-x-2 mt-8">
                    <span className="text-sm text-muted-foreground">Feature {index + 1} of {infrastructureFeatures.length}</span>
                    <div className="flex space-x-1">
                      {infrastructureFeatures.map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i === index
                              ? 'bg-primary w-6'
                              : 'bg-muted'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Virtual Tour CTA */}
          <div className="mt-24 text-center">
            <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-12 border border-muted/30">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Experience Our Campus
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Take our interactive virtual tour to explore our world-class facilities 
                and get a feel for student life at Global International School.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  Start Virtual Tour
                </button>
                <button className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105">
                  Schedule Campus Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}