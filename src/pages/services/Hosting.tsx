import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Server, Shield, Zap, Clock, Database, Globe, CheckCircle, ArrowRight } from 'lucide-react';

const Hosting = () => {
  const hostingPlans = [
    {
      name: "Starter",
      price: "₹99",
      period: "/month",
      features: ["5GB SSD Storage", "10GB Bandwidth", "1 Website", "Free SSL", "Email Support"],
      popular: false
    },
    {
      name: "Professional",
      price: "₹299",
      period: "/month",
      features: ["50GB SSD Storage", "Unlimited Bandwidth", "5 Websites", "Free SSL & Domain", "24/7 Support", "Daily Backups"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹799",
      period: "/month",
      features: ["100GB SSD Storage", "Unlimited Bandwidth", "Unlimited Websites", "Free SSL & Domain", "Priority Support", "CDN Included", "Staging Environment"],
      popular: false
    }
  ];

  const features = [
    { icon: Server, title: "SSD Storage", description: "Lightning-fast NVMe SSD storage for optimal performance" },
    { icon: Shield, title: "Free SSL", description: "Secure your website with free SSL certificates" },
    { icon: Zap, title: "99.9% Uptime", description: "Guaranteed uptime with enterprise-grade infrastructure" },
    { icon: Clock, title: "24/7 Support", description: "Round-the-clock expert technical support" },
    { icon: Database, title: "Daily Backups", description: "Automated daily backups with easy restore" },
    { icon: Globe, title: "CDN Integration", description: "Global content delivery for faster loading" }
  ];

  return (
    <>
      <Helmet>
        <title>Web Hosting Services India | Fast, Secure & Affordable - SivWebAI</title>
        <meta name="description" content="Premium web hosting in India starting ₹99/month. Free SSL, domain, 24/7 support, 99.9% uptime. WordPress, VPS, dedicated servers available." />
        <meta name="keywords" content="web hosting india, cheap hosting, free domain hosting, wordpress hosting, VPS hosting, dedicated servers, ssl hosting" />
        <link rel="canonical" href="https://sivwebai.com/services/hosting" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Premium Web Hosting Services
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Lightning-fast, secure, and reliable web hosting solutions for businesses of all sizes. 
                  Start with free SSL and domain registration.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg">
                    <Zap className="w-5 h-5 mr-2" />
                    Get Started Free
                  </Button>
                  <Button size="lg" variant="outline">
                    View All Plans
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Our Hosting?</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Enterprise-grade infrastructure with premium features at affordable prices
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="hover-lift">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Hosting Plans</h2>
                <p className="text-xl text-muted-foreground">Choose the perfect plan for your needs</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {hostingPlans.map((plan, index) => (
                  <Card key={index} className={`relative ${plan.popular ? 'border-primary border-2 shadow-lg' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-primary">{plan.price}</span>
                        <span className="text-muted-foreground">{plan.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-success mr-3" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-primary text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of satisfied customers and experience premium hosting today.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Start Your Free Trial
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Hosting;