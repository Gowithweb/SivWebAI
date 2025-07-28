import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Globe, Shield, Zap, CheckCircle, Star, ArrowRight, Gift } from 'lucide-react';

const DomainSection = () => {
  const [domain, setDomain] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const domainExtensions = [
    { ext: '.com', price: '₹899', popular: true },
    { ext: '.in', price: '₹499', popular: true },
    { ext: '.ai', price: '₹8999', trending: true },
    { ext: '.net', price: '₹1299', popular: false },
    { ext: '.org', price: '₹1199', popular: false },
    { ext: '.co', price: '₹2999', trending: true },
    { ext: '.io', price: '₹4999', trending: true },
    { ext: '.tech', price: '₹3999', trending: true }
  ];

  const handleDomainSearch = async () => {
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setIsSearching(false);
    }, 2000);
  };

  return (
    <section id="domains" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent-bright/5 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30 animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-accent-bright bg-clip-text text-transparent mb-4">
            <Globe className="w-8 h-8 text-primary animate-float" />
            <span className="text-sm font-semibold uppercase tracking-wider">Domain Registration</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Find Your Perfect
            <span className="bg-gradient-to-r from-primary via-secondary to-accent-bright bg-clip-text text-transparent"> Domain</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Register your domain with free WHOIS protection, DNS management, and email forwarding. Get AI domains (.ai), Indian domains (.in), and international extensions (.com) at best prices.
          </p>
        </div>

        {/* Domain Search */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-card border-0 shadow-xl hover-glow">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
                <Search className="w-6 h-6 text-primary" />
                Domain Search
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Input
                    type="text"
                    placeholder="Enter your dream domain name..."
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="h-14 text-lg pr-16 border-2 border-primary/20 focus:border-primary/50 rounded-xl"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                    .com
                  </div>
                </div>
                <Button 
                  onClick={handleDomainSearch}
                  disabled={isSearching || !domain}
                  className="btn-hero h-14 px-8 min-w-[160px]"
                >
                  {isSearching ? (
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                  ) : (
                    <>
                      <Search className="w-5 h-5 mr-2" />
                      Search Domain
                    </>
                  )}
                </Button>
              </div>

              {/* Quick Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-success/10 to-success/5 rounded-lg border border-success/20">
                  <Shield className="w-5 h-5 text-success" />
                  <span className="text-sm font-medium text-foreground">Free WHOIS Protection</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">Instant Activation</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-accent-bright/10 to-accent-bright/5 rounded-lg border border-accent-bright/20">
                  <CheckCircle className="w-5 h-5 text-accent-bright" />
                  <span className="text-sm font-medium text-foreground">Free DNS Management</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Domain Extensions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {domainExtensions.map((item, index) => (
            <Card 
              key={index} 
              className={`hover-lift bg-gradient-card border-0 shadow-md relative overflow-hidden ${
                item.popular ? 'ring-2 ring-primary shadow-primary' : ''
              } ${item.trending ? 'ring-2 ring-accent-bright shadow-accent' : ''}`}
            >
              {item.popular && (
                <div className="absolute -top-2 -right-2">
                  <div className="bg-gradient-to-r from-primary via-primary-glow to-secondary text-white px-3 py-1 rounded-full text-xs font-medium flex items-center shadow-lg">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              {item.trending && (
                <div className="absolute -top-2 -right-2">
                  <div className="bg-gradient-to-r from-accent-bright via-secondary to-primary text-white px-3 py-1 rounded-full text-xs font-medium flex items-center shadow-lg">
                    <Zap className="w-3 h-3 mr-1 fill-current" />
                    Trending
                  </div>
                </div>
              )}
              
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-foreground mb-2">{item.ext}</div>
                <div className="text-2xl font-bold text-primary mb-4">{item.price}</div>
                <div className="text-sm text-muted-foreground mb-4">per year</div>
                <Button 
                  variant={item.popular || item.trending ? 'hero' : 'secondary'}
                  onClick={() => {
                    // Smooth scroll to contact section
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    // Pre-fill domain in contact form if needed
                    setTimeout(() => {
                      const messageField = document.querySelector('textarea[placeholder*="message"]') as HTMLTextAreaElement;
                      if (messageField) {
                        messageField.value = `I'm interested in registering a ${item.ext} domain.`;
                        messageField.focus();
                      }
                    }, 500);
                  }}
                  className="w-full group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Register Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Offers */}
        <div className="bg-gradient-to-r from-primary via-secondary to-accent-bright rounded-2xl p-8 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Special Domain Offers</h3>
            <p className="text-xl mb-6 opacity-90">
              Get FREE domain with any annual hosting plan + Free website setup + Free SSL certificate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setTimeout(() => {
                    const messageField = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
                    if (messageField) {
                      messageField.value = 'I want to claim my free domain with hosting plan. Please contact me with details.';
                      messageField.focus();
                    }
                  }, 800);
                }}
                className="bg-white text-primary hover:bg-white/95 hover:shadow-xl hover:scale-105 px-8 py-3 font-semibold transition-all duration-300 group border-2 border-white/20 shadow-lg"
                size="lg"
              >
                <Gift className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Claim Free Domain
              </Button>
              <span className="text-sm opacity-75">No hidden fees • Instant setup • 24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainSection;