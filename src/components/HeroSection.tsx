import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Shield, Clock, Wrench, Globe, Headphones } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <img 
          src={heroBanner} 
          alt="SivWebAI - Complete End-to-End Web Solutions with 24/7 Support"
          className="w-full h-full object-cover mix-blend-overlay opacity-10"
          loading="eager"
          fetchPriority="high"
        />
        {/* Subtle Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-float delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-accent-cyan/15 rounded-full blur-[100px] animate-pulse-slow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto reveal">
          {/* Premium Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
            <Code className="w-4 h-4 text-secondary" />
            <span className="text-white/90 font-medium text-sm tracking-wide">Complete Web Solutions Partner</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            End-to-End
            <span className="block bg-gradient-to-r from-secondary via-primary to-accent-cyan bg-clip-text text-transparent mt-2">Web Solutions</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 font-normal mb-4 tracking-wide">
            Development • Hosting • Support
          </p>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            From website development to hosting, troubleshooting to ongoing support - 
            <span className="text-white/90"> SivWebAI</span> handles all your web needs with 
            <span className="text-secondary"> 24/7 expert assistance</span>.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <span className="text-white font-semibold">Web Development</span>
              <span className="text-white/50 text-sm">Custom websites & apps</span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <Globe className="w-6 h-6 text-secondary" />
              </div>
              <span className="text-white font-semibold">Hosting & Domain</span>
              <span className="text-white/50 text-sm">Fast, secure, reliable</span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-accent-bright/20 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <Headphones className="w-6 h-6 text-accent-bright" />
              </div>
              <span className="text-white font-semibold">24/7 Support</span>
              <span className="text-white/50 text-sm">Always here to help</span>
            </div>
          </div>

          {/* Additional Features Row */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <div className="flex items-center space-x-2 text-white/60 text-sm">
              <Shield className="w-4 h-4 text-secondary" />
              <span>SSL & Security</span>
            </div>
            <span className="text-white/30">•</span>
            <div className="flex items-center space-x-2 text-white/60 text-sm">
              <Wrench className="w-4 h-4 text-accent-bright" />
              <span>Troubleshooting</span>
            </div>
            <span className="text-white/30">•</span>
            <div className="flex items-center space-x-2 text-white/60 text-sm">
              <Clock className="w-4 h-4 text-primary" />
              <span>99.9% Uptime</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 h-12 text-base font-semibold bg-secondary hover:bg-secondary/90 text-white rounded-lg transition-all duration-200"
              size="lg"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              variant="outline"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 h-12 text-base font-semibold bg-transparent border border-white/30 text-white hover:bg-white/10 rounded-lg transition-all duration-200"
              size="lg"
            >
              View Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-white/50 text-sm">
            <span>✓ 500+ Projects</span>
            <span>✓ 99.9% Uptime</span>
            <span>✓ Free Migration</span>
            <span>✓ 30-Day Guarantee</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;