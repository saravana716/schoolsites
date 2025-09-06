import { Facebook, Instagram, Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import logoImage from '../assets/2.png'

interface NewFooterProps {
  onNavigate?: (page: string) => void;
}

export function NewFooter({ onNavigate }: NewFooterProps) {
  const exploreLinks = [
    { name: "Home", page: "home" },
    { name: "About Us", page: "about" },
    { name: "Infrastructure", page: "infrastructure" },
    { name: "Careers", page: "career" },
    { name: "Contact Us", page: "contact" }
  ]

  const quickLinks = [
    { name: "Admission Enquiry", page: "contact" },
    { name: "Admission Form", page: "admission" },
    { name: "Fee Structure", page: "admission" },
    { name: "Curriculum", page: "academic" }
  ]

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  return (
    <footer className="bg-background">
      {/* Google Maps Section */}
      <div className="w-full h-80 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.8823456789!2d77.5645!3d11.0051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85d5d5e5e5e5f%3A0x5e5e5e5e5e5e5e5e!2sKangayam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Pranav Global School Location"
          className="filter grayscale-0"
        />
        
        {/* Map Overlay with School Location */}
        <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-lg">
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-destructive" />
            <div>
              <p className="font-semibold text-sm text-foreground">Pranav Global School</p>
              <p className="text-xs text-muted-foreground">Kangayam, Tiruppur</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Bar */}
      <div className="bg-primary text-white py-4">
        <div className="full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            {/* Phone */}
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="bg-white/20 rounded-full p-2">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">9760999555</p>
                <p className="text-sm text-white/80">Call Us</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="bg-white/20 rounded-full p-2">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">globalsckgm@gmail.com</p>
                <p className="text-sm text-white/80">Email Us</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="bg-white/20 rounded-full p-2">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">Dharapuram Road, Kangayam, A.P. Pudur</p>
                <p className="text-sm text-white/80">Kangayam Taluk, Tiruppur – 638701</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-muted py-16">
        <div className="full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* School Info */}
            <div>
              <div className="flex items-center mb-6">
                <div className="mr-3">
                  <img 
                    src={logoImage} 
                    alt="Pranav Global School Logo" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Pranav Global School</h3>
                  <p className="text-xs text-destructive font-semibold">EDUCATE.EMPOWER.EXCEL</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Welcome to the Pranav Global School. We are a part of Global 
                Educational Trust, which has a strong presence on the education map of 
                Kangayam Taluk, Tiruppur.
              </p>
            </div>

            {/* Explore */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">Explore</h4>
              <ul className="space-y-3">
                {exploreLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavigation(link.page)}
                      className="text-muted-foreground hover:text-secondary transition-colors text-sm text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavigation(link.page)}
                      className="text-muted-foreground hover:text-secondary transition-colors text-sm text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">Social Media</h4>
              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Facebook className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm">Facebook</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Instagram className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-primary text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm">
              © 2025, Pranav Global School. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}