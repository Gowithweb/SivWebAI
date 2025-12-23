import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Shield, Clock, Wrench, Globe, Headphones } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark Gradient Background with Blue, Green, Orange Accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-primary-dark to-foreground">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <img 
          src={heroBanner} 
          alt="SivWebAI - Complete End-to-End Web Solutions with 24/7 Support"
          className="w-full h-full object-cover mix-blend-overlay opacity-15"
          loading="eager"
          fetchPriority="high"
        />
        {/* Floating Color Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/25 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent-bright/25 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-accent-cyan/20 rounded-full blur-3xl animate-float delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto reveal">
          {/* Premium Badge */}
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-2xl px-8 py-3 mb-10 shadow-2xl hover:scale-105 transition-transform duration-300">
            <Code className="w-6 h-6 text-secondary animate-pulse" />
            <span className="text-white font-black text-lg">🚀 Complete Web Solutions Partner</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 text-balance drop-shadow-2xl leading-tight">
            End-to-End 
            <span className="block bg-gradient-to-r from-primary via-accent-cyan to-secondary bg-clip-text text-transparent animate-gradient-x"> Web Solutions</span>
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 font-bold text-white/90">Development • Hosting • Support</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-10 max-w-3xl mx-auto text-balance drop-shadow-lg leading-relaxed">
            From website development to hosting, troubleshooting to ongoing support - <strong className="text-secondary">SivWebAI</strong> handles all your web needs with <strong className="text-accent-bright">24/7 expert assistance</strong>.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 max-w-4xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-3 bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-2xl p-6 hover:scale-105 hover:bg-white/15 transition-all duration-300 shadow-xl group">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent-cyan rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Code className="w-8 h-8 text-white" />
              </div>
              <span className="text-white font-bold text-lg">Web Development</span>
              <span className="text-white/70 text-sm">Custom websites & apps</span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-2xl p-6 hover:scale-105 hover:bg-white/15 transition-all duration-300 shadow-xl group">
              <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent-lime rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <span className="text-white font-bold text-lg">Hosting & Domain</span>
              <span className="text-white/70 text-sm">Fast, secure, reliable</span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-2xl p-6 hover:scale-105 hover:bg-white/15 transition-all duration-300 shadow-xl group">
              <div className="w-14 h-14 bg-gradient-to-br from-accent-bright to-warning rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <span className="text-white font-bold text-lg">24/7 Support</span>
              <span className="text-white/70 text-sm">Always here to help</span>
            </div>
          </div>

          {/* Additional Features Row */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Shield className="w-5 h-5 text-secondary" />
              <span className="text-white text-sm font-medium">SSL & Security</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Wrench className="w-5 h-5 text-accent-bright" />
              <span className="text-white text-sm font-medium">Troubleshooting</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-white text-sm font-medium">99.9% Uptime</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xl px-12 py-6 group relative overflow-hidden bg-gradient-to-r from-accent-bright via-warning to-accent-bright text-white font-black rounded-xl shadow-accent hover:shadow-glow hover:scale-105 transition-all duration-300"
              size="lg"
            >
              <span className="relative z-10 flex items-center">
                🚀 Get Started Free
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
            <Button 
              variant="outline"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xl px-12 py-6 bg-white/10 backdrop-blur-xl border-2 border-white/40 text-white hover:bg-white hover:text-foreground hover:border-white font-bold rounded-xl"
              size="lg"
            >
              ⚡ View Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-14 text-white font-medium text-base bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-2xl px-8 py-4 inline-block shadow-xl">
            <p>✓ 500+ Projects Completed • 99.9% Uptime • Free Migration • 30-Day Money Back</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center bg-white/10 backdrop-blur-sm shadow-xl">
          <div className="w-2 h-4 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;