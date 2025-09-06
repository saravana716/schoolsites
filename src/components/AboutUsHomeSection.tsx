import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutUsHomeSection() {
  return (
    <section className="py-20 bg-background">
      <div className="full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Pranav Global School
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover excellence in education at Pranav Global School, where we nurture 
            young minds to become tomorrow's leaders through innovative teaching and 
            holistic development.
          </p>
        </div>

        {/* Content Grid - 3 sections with alternating layout */}
        <div className="space-y-20">
          {/* Section 1: Image Left, Content Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1667664873492-30c4867c92d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBjYW1wdXMlMjBhZXJpYWx8ZW58MXx8fHwxNzU2ODMxMzU2fDA&ixlib=rb-4.1.0&q=80&w=600&h=400"
                alt="Modern School Campus"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2 bg-muted/50 p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-primary mb-6">
                Excellence in Education
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At Pranav Global School, we believe every child has unique potential. Our 
                comprehensive curriculum combines academic rigor with creative expression, 
                ensuring students develop both intellectually and personally.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">CBSE Affiliated Institution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">State-of-the-art Infrastructure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">Experienced Faculty</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Content Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-accent/10 p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-primary mb-6">
                Holistic Development
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We foster not just academic excellence but also character building, 
                leadership skills, and social responsibility. Our students graduate 
                as confident, compassionate, and capable individuals ready to make 
                a positive impact on the world.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span className="text-foreground">Character Building Programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span className="text-foreground">Leadership Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span className="text-foreground">Community Service</span>
                </div>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1722248540590-ba8b7af1d7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwbGlicmFyeXxlbnwxfHx8fDE3NTY4MTc3ODB8MA&ixlib=rb-4.1.0&q=80&w=600&h=400"
                alt="Students Studying"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Section 3: Image Left, Content Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1565402161570-7ca09ba499f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBwbGF5Z3JvdW5kJTIwY2hpbGRyZW58ZW58MXx8fHwxNzU2ODMxMzYyfDA&ixlib=rb-4.1.0&q=80&w=600&h=400"
                alt="Students Playing"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2 bg-primary/5 p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-primary mb-6">
                Innovation & Future Ready
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Embracing technology and innovation, we prepare our students for the 
                challenges of tomorrow. Our modern approach to education ensures 
                students are equipped with 21st-century skills and global competencies.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Digital Learning Platforms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">STEM Education Focus</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Global Partnerships</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}