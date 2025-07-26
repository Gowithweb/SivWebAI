import { Button } from '@/components/ui/button';
import { ArrowRight, Gift, Shield, Clock } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-black/50"></div>
        <img 
          src={heroBanner} 
          alt="Best Web Hosting India - Premium SSD Servers with 24/7 Support and Free Domain"
          className="w-full h-full object-cover mix-blend-overlay opacity-30"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Premium Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
            <Gift className="w-4 h-4 text-yellow-400" />
            <span className="text-white font-medium">3 Months Free Hosting + Free Domain + Free SSL</span>
          </div>

          {/* Main Headline with SEO Keywords */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
            Best Web Hosting 
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> India</span>
            <span className="block text-3xl md:text-4xl mt-2">Free Domain + SSL Certificate</span>
          </h1>

          {/* Subheadline with Local SEO and Value Proposition */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto text-balance">
            Premium WordPress hosting starting <strong className="text-yellow-400">₹99/month</strong> with FREE domain registration, SSL certificate, unlimited bandwidth, and 24/7 expert support. Best hosting provider in Mumbai, Delhi, Bangalore for fastest website performance.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-white/90">
              <Shield className="w-5 h-5 text-green-400" />
              <span>Free SSL & Security</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-white/90">
              <Clock className="w-5 h-5 text-blue-400" />
              <span>24/7 Expert Support</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-white/90">
              <Gift className="w-5 h-5 text-yellow-400" />
              <span>Free Website Setup</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-4 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-secondary-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 flex items-center">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button 
              variant="outline"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-foreground hover:border-white"
            >
              Transfer Your Hosting
            </Button>
            <Button 
              variant="secondary" 
              onClick={() => document.getElementById('domains')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 text-lg px-8 py-4"
            >
              Explore Plans
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-white/70 text-sm">
            <p>Trusted by 50,000+ websites • 99.9% Uptime Guarantee • 30-Day Money Back</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;