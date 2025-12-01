import { useState } from 'react';
import { Menu, X, Globe, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary/95 via-secondary/95 to-accent-bright/95 backdrop-blur-md border-b border-white/20 shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-rainbow transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <Globe className="w-7 h-7 bg-gradient-to-br from-primary via-secondary to-accent-bright bg-clip-text text-transparent" />
            </div>
            <span className="text-3xl font-black text-white drop-shadow-lg">SivWebAI</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="relative text-white font-bold text-base hover:text-accent-lime transition-all duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-1 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-accent-lime after:to-accent-cyan after:rounded-full after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Home</a>
            <a href="/services" className="relative text-white font-bold text-base hover:text-accent-lime transition-all duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-1 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-accent-lime after:to-accent-cyan after:rounded-full after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Services</a>
            <a href="/projects" className="relative text-white font-bold text-base hover:text-accent-lime transition-all duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-1 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-accent-lime after:to-accent-cyan after:rounded-full after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Projects</a>
            <a href="/ai-services" className="relative text-white font-bold text-base hover:text-accent-lime transition-all duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-1 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-accent-lime after:to-accent-cyan after:rounded-full after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">AI Services</a>
            <a href="/tools" className="relative text-white font-bold text-base hover:text-accent-lime transition-all duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-1 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-accent-lime after:to-accent-cyan after:rounded-full after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Tools</a>
            <a href="/team" className="relative text-white font-bold text-base hover:text-accent-lime transition-all duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-1 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-accent-lime after:to-accent-cyan after:rounded-full after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">About Us</a>
            <a href="/blog" className="relative text-white font-bold text-base hover:text-accent-lime transition-all duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-1 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-accent-lime after:to-accent-cyan after:rounded-full after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Blog</a>
            <a href="/contact" className="relative text-white font-bold text-base hover:text-accent-lime transition-all duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-1 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-accent-lime after:to-accent-cyan after:rounded-full after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Contact</a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => window.open('https://client.sivwebai.com', '_blank')}
              className="group font-black border-white/40 text-white hover:bg-white hover:text-primary"
            >
              <Shield className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Client Portal
            </Button>
            <Button 
              variant="hero"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group font-black"
            >
              <Zap className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Get Started Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-accent-lime transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="/services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="/projects" className="text-foreground hover:text-primary transition-colors">Projects</a>
              <a href="/ai-services" className="text-foreground hover:text-primary transition-colors">AI Services</a>
              <a href="/tools" className="text-foreground hover:text-primary transition-colors">Tools</a>
              <a href="/team" className="text-foreground hover:text-primary transition-colors">About Us</a>
              <a href="/blog" className="text-foreground hover:text-primary transition-colors">Blog</a>
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