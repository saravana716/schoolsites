import { Award, Users, GraduationCap, Heart, Globe, BookOpen, Trophy, Shield } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function WhyChooseSection() {
  const reasons = [
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Consistently ranked among the top schools with 98% college acceptance rate and outstanding standardized test scores.",
      stats: "98% College Acceptance"
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "With a 12:1 student-to-teacher ratio, every student receives personalized attention and support.",
      stats: "12:1 Student Ratio"
    },
    {
      icon: GraduationCap,
      title: "Expert Faculty",
      description: "Our teachers hold advanced degrees and bring years of experience in their respective fields.",
      stats: "95% Advanced Degrees"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "International exchange programs and multicultural curriculum prepare students for the global community.",
      stats: "25+ Countries Represented"
    },
    {
      icon: BookOpen,
      title: "Innovative Curriculum",
      description: "Cutting-edge STEM programs, arts integration, and project-based learning methodologies.",
      stats: "100+ Course Offerings"
    },
    {
      icon: Trophy,
      title: "Championship Athletics",
      description: "State-of-the-art facilities and competitive teams that have won numerous regional and state championships.",
      stats: "50+ Championships Won"
    },
    {
      icon: Heart,
      title: "Character Development",
      description: "Strong emphasis on values, ethics, community service, and developing well-rounded individuals.",
      stats: "5000+ Service Hours"
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Secure campus with modern safety systems, trained staff, and comprehensive emergency protocols.",
      stats: "24/7 Security"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="full mx-auto px-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Pranav Global School?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover what makes Pranav Global School the premier choice for families seeking 
            exceptional education, character development, and lifelong success.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-2xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <reason.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">{reason.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {reason.description}
                </p>
                <div className="bg-muted/50 rounded-lg py-2 px-3">
                  <span className="text-secondary font-medium text-sm">{reason.stats}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-muted/30 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Join Our Community?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the Pranav Global School difference. Schedule a campus tour and 
            see firsthand how we're preparing students for success in college and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Schedule a Tour
            </button>
            <button className="border border-secondary text-secondary hover:bg-secondary/10 px-8 py-3 rounded-lg font-medium transition-colors">
              Download Brochure
            </button>
          </div>
        </div>


      </div>
    </section>
  );
}