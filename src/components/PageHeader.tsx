import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  currentPage: string;
  backgroundPattern?: boolean;
}

export function PageHeader({ title, currentPage, backgroundPattern = true }: PageHeaderProps) {
  return (
    <section className="relative bg-gradient-to-br from-muted/40 via-background to-muted/30 py-20 overflow-hidden">
      {/* Background Pattern Elements */}
      {backgroundPattern && (
        <>
          {/* Decorative circles */}
          <div className="absolute top-10 right-20 w-24 h-24 bg-secondary/20 rounded-full"></div>
          <div className="absolute top-32 right-10 w-16 h-16 bg-accent/30 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-20 h-20 bg-primary/10 rounded-full"></div>
          
          {/* Dotted pattern */}
          <div className="absolute top-16 left-10 opacity-30">
            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="w-1 h-1 bg-primary rounded-full"></div>
              ))}
            </div>
          </div>
          
          {/* Curved lines */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d="M20,20 Q50,10 80,20 Q90,50 80,80 Q50,90 20,80 Q10,50 20,20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-secondary"
              />
            </svg>
          </div>
          
          {/* Abstract shapes */}
          <div className="absolute bottom-10 right-32 w-12 h-12 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-lg rotate-45"></div>
        </>
      )}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Page Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
          {title}
        </h1>
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center justify-center space-x-2 text-muted-foreground">
          <button className="hover:text-secondary transition-colors">
            Home
          </button>
          <ChevronRight className="h-4 w-4" />
          <span className="text-secondary font-medium">
            {currentPage}
          </span>
        </nav>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" className="w-full h-8 text-background fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}