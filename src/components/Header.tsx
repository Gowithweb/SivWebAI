import { useState } from 'react';
import { Menu, X, Globe, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-primary">GOwithWeb</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="/" 
              className="relative text-foreground hover:text-primary transition-all duration-300 font-medium after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-primary after:to-accent-bright after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Home
            </a>
            <a 
              href="/web-solutions" 
              className="relative text-foreground hover:text-primary transition-all duration-300 font-medium after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-primary after:to-accent-bright after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Web Solutions
            </a>
            <a 
              href="/web-development" 
              className="relative text-foreground hover:text-primary transition-all duration-300 font-medium after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-primary after:to-accent-bright after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Development
            </a>
            <a 
              href="/seo-services" 
              className="relative text-foreground hover:text-primary transition-all duration-300 font-medium after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-primary after:to-accent-bright after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              SEO Services
            </a>
            <a 
              href="/digital-marketing" 
              className="relative text-foreground hover:text-primary transition-all duration-300 font-medium after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-primary after:to-accent-bright after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Marketing
            </a>
            <a 
              href="/contact" 
              className="relative text-foreground hover:text-primary transition-all duration-300 font-medium after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-primary after:to-accent-bright after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Contact
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => window.open('https://client.gowithweb.com', '_blank')}
              className="group"
            >
              <Shield className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              Client Login
            </Button>
            <Button 
              variant="hero"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group"
            >
              <Zap className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Get Started Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="/web-solutions" className="text-foreground hover:text-primary transition-colors">Web Solutions</a>
              <a href="/web-development" className="text-foreground hover:text-primary transition-colors">Development</a>
              <a href="/seo-services" className="text-foreground hover:text-primary transition-colors">SEO Services</a>
              <a href="/digital-marketing" className="text-foreground hover:text-primary transition-colors">Marketing</a>
              <a href="/contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Login
                </Button>
                <Button className="btn-hero">Get Started Free</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;