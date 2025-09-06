import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog'

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Infrastructure', href: 'infrastructure' },
    { name: 'Academic', href: 'academic' },
    { name: 'Admission', href: 'admission' },
    { name: 'Gallery', href: 'gallery' },
    { name: 'Career', href: 'career' },
    { name: 'Contact', href: 'contact' }
  ]

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-sm border-b">
      <div className="full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* PGS Animation Button */}
          <div className="flex items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 animate-pulse"
            >
              PGS
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => onNavigate(item.href)}
                className={`text-white hover:text-accent font-medium transition-colors ${
                  currentPage === item.href ? 'text-accent' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Apply Now Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => onNavigate('admission')}
              className="bg-destructive hover:bg-destructive/90 text-white px-6 py-2"
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/20 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    onNavigate(item.href);
                    setIsMenuOpen(false);
                  }}
                  className={`text-white hover:text-accent font-medium px-2 py-1 text-left ${
                    currentPage === item.href ? 'text-accent' : ''
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button 
                onClick={() => {
                  onNavigate('admission');
                  setIsMenuOpen(false);
                }}
                className="bg-destructive hover:bg-destructive/90 text-white mx-2 mt-4"
              >
                Apply Now
              </Button>
            </nav>
          </div>
        )}

        {/* PGS Animation Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle className="text-center text-2xl font-bold text-primary">
                Pranav Global School - Excellence in Education
              </DialogTitle>
              <DialogDescription className="text-center text-muted-foreground">
                Discover our commitment to educating, empowering, and helping students excel in their academic journey.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6 p-6">
              {/* Animated School Values */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-primary/5 rounded-2xl animate-fade-in">
                  <div className="w-16 h-16 bg-primary text-white rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold">E</span>
                  </div>
                  <h3 className="font-bold text-primary mb-2">EDUCATE</h3>
                  <p className="text-sm text-muted-foreground">Providing world-class education with innovative teaching methods</p>
                </div>
                
                <div className="text-center p-6 bg-secondary/5 rounded-2xl animate-fade-in-delay">
                  <div className="w-16 h-16 bg-secondary text-white rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold">E</span>
                  </div>
                  <h3 className="font-bold text-secondary mb-2">EMPOWER</h3>
                  <p className="text-sm text-muted-foreground">Empowering students to become confident leaders of tomorrow</p>
                </div>
                
                <div className="text-center p-6 bg-destructive/5 rounded-2xl animate-fade-in">
                  <div className="w-16 h-16 bg-destructive text-white rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold">E</span>
                  </div>
                  <h3 className="font-bold text-destructive mb-2">EXCEL</h3>
                  <p className="text-sm text-muted-foreground">Achieving excellence in academics, sports, and character building</p>
                </div>
              </div>

              {/* Animated Statistics */}
              <div className="bg-primary text-white rounded-2xl p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div className="animate-bounce">
                    <div className="text-3xl font-bold mb-2">25+</div>
                    <div className="text-primary-foreground/80 text-sm">Years of Excellence</div>
                  </div>
                  <div className="animate-bounce" style={{ animationDelay: '0.2s' }}>
                    <div className="text-3xl font-bold mb-2">5,000+</div>
                    <div className="text-primary-foreground/80 text-sm">Happy Students</div>
                  </div>
                  <div className="animate-bounce" style={{ animationDelay: '0.4s' }}>
                    <div className="text-3xl font-bold mb-2">150+</div>
                    <div className="text-primary-foreground/80 text-sm">Expert Teachers</div>
                  </div>
                  <div className="animate-bounce" style={{ animationDelay: '0.6s' }}>
                    <div className="text-3xl font-bold mb-2">98%</div>
                    <div className="text-primary-foreground/80 text-sm">Success Rate</div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <Button 
                  onClick={() => {
                    setIsModalOpen(false)
                    onNavigate('admission')
                  }}
                  className="bg-destructive hover:bg-destructive/90 text-white px-8 py-3 text-lg font-semibold"
                >
                  Join Our School Family
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  )
}