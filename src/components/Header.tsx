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
            <a href="/" className="relative text-foreground hover:text-primary transition-all duration-300 font-medium after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-primary after:to-accent-bright after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Home</a>
            <a href="/services" className="relative text-foreground hover:text-primary transition-all duration-300 font-medium after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-primary after:to-accent-bright after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Services</a>
            <a href="/projects" className="relative text-foreground hover:text-primary transition-all duration-300 font-medium after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-primary after:to-accent-bright after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Projects</a>
            <a href="/blog" className="relative text-foreground hover:text-primary transition-all duration-300 font-medium after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-primary after:to-accent-bright after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Blog</a>
            <a href="/ai-services" className="relative text-foreground hover:text-primary transition-all duration-300 font-medium after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-primary after:to-accent-bright after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">AI Services</a>
            <a href="/tools" className="relative text-foreground hover:text-primary transition-all duration-300 font-medium after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-primary after:to-accent-bright after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Tools</a>
            <a href="/team" className="relative text-foreground hover:text-primary transition-all duration-300 font-medium after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-primary after:to-accent-bright after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Team</a>
            <a href="/contact" className="relative text-foreground hover:text-primary transition-all duration-300 font-medium after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-primary after:to-accent-bright after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Contact</a>
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
              <a href="/services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="/projects" className="text-foreground hover:text-primary transition-colors">Projects</a>
              <a href="/blog" className="text-foreground hover:text-primary transition-colors">Blog</a>
              <a href="/ai-services" className="text-foreground hover:text-primary transition-colors">AI Services</a>
              <a href="/tools" className="text-foreground hover:text-primary transition-colors">Tools</a>
              <a href="/team" className="text-foreground hover:text-primary transition-colors">Team</a>
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