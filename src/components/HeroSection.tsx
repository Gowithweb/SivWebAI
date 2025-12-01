import { Button } from '@/components/ui/button';
import { ArrowRight, Gift, Shield, Clock } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Vibrant Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary via-accent-bright to-accent-cyan animate-gradient-x">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <img 
          src={heroBanner} 
          alt="Best Web Hosting India - Premium SSD Servers with 24/7 Support and Free Domain"
          className="w-full h-full object-cover mix-blend-overlay opacity-20"
          loading="eager"
          fetchPriority="high"
        />
        {/* Floating Color Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-lime/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/40 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent-bright/30 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto reveal">
          {/* Premium Badge */}
          <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-xl border-2 border-white/40 rounded-2xl px-8 py-3 mb-10 shadow-2xl hover:scale-105 transition-transform duration-300">
            <Gift className="w-6 h-6 text-accent-lime animate-pulse" />
            <span className="text-white font-black text-lg">🎉 3 Months Free + Domain + SSL</span>
          </div>

          {/* Main Headline with SEO Keywords */}
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 text-balance drop-shadow-2xl">
            Best Web Hosting 
            <span className="block bg-gradient-to-r from-accent-lime via-accent-cyan to-accent-bright bg-clip-text text-transparent animate-gradient-x"> India</span>
            <span className="block text-4xl md:text-5xl mt-4 font-bold bg-gradient-to-r from-accent-bright to-accent-cyan bg-clip-text text-transparent">Free Domain + SSL Certificate</span>
          </h1>

          {/* Subheadline with Local SEO and Value Proposition */}
          <p className="text-2xl md:text-3xl text-white font-bold mb-10 max-w-3xl mx-auto text-balance drop-shadow-lg leading-relaxed">
            Premium WordPress hosting starting <strong className="text-accent-lime text-3xl md:text-4xl">₹99/month</strong> with FREE domain, SSL, unlimited bandwidth, and 24/7 expert support.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14 max-w-3xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-3 bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-2xl p-6 hover:scale-105 hover:bg-white/20 transition-all duration-300 shadow-xl">
              <Shield className="w-10 h-10 text-accent-lime" />
              <span className="text-white font-bold text-lg">Free SSL & Security</span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-2xl p-6 hover:scale-105 hover:bg-white/20 transition-all duration-300 shadow-xl">
              <Clock className="w-10 h-10 text-accent-cyan" />
              <span className="text-white font-bold text-lg">24/7 Expert Support</span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-2xl p-6 hover:scale-105 hover:bg-white/20 transition-all duration-300 shadow-xl">
              <Gift className="w-10 h-10 text-accent-bright" />
              <span className="text-white font-bold text-lg">Free Website Setup</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="hero"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xl px-12 py-6 group relative overflow-hidden"
              size="lg"
            >
              <span className="relative z-10 flex items-center font-black">
                🚀 Get Started Free
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
            <Button 
              variant="outline"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xl px-12 py-6 bg-white/20 backdrop-blur-xl border-3 border-white/50 text-white hover:bg-white hover:text-primary hover:border-white font-black"
              size="lg"
            >
              ⚡ View Plans
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-14 text-white font-bold text-lg bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-2xl px-8 py-4 inline-block shadow-xl">
            <p>✓ Trusted by 50,000+ websites • 99.9% Uptime • 30-Day Money Back</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-3 border-white/50 rounded-full flex justify-center bg-white/10 backdrop-blur-sm shadow-xl">
          <div className="w-2 h-4 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;