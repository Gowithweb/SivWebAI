import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Shield, Lock, CheckCircle, AlertTriangle, Globe, Zap } from 'lucide-react';

const SSL = () => {
  const sslPlans = [
    {
      name: "Basic SSL",
      price: "Free",
      description: "Perfect for personal websites and blogs",
      features: [
        "Domain Validation (DV)",
        "256-bit Encryption",
        "Browser Trust",
        "Mobile Compatibility",
        "Auto Installation",
        "24/7 Support"
      ],
      popular: false,
      cta: "Get Free SSL"
    },
    {
      name: "Business SSL",
      price: "$49/year",
      description: "Ideal for business websites and e-commerce",
      features: [
        "Organization Validation (OV)",
        "256-bit Encryption",
        "Company Verification",
        "Trust Indicators",
        "Warranty $100,000",
        "Priority Support"
      ],
      popular: true,
      cta: "Choose Business"
    },
    {
      name: "Extended SSL",
      price: "$199/year",
      description: "Maximum trust for large enterprises",
      features: [
        "Extended Validation (EV)",
        "Green Address Bar",
        "Company Name Display",
        "Highest Trust Level",
        "Warranty $1,500,000",
        "Dedicated Support"
      ],
      popular: false,
      cta: "Get Extended SSL"
    }
  ];

  const securityFeatures = [
    {
      icon: Lock,
      title: "256-bit Encryption",
      description: "Military-grade encryption protects all data transmitted between your website and visitors."
    },
    {
      icon: Shield,
      title: "Trust Indicators",
      description: "Display trust seals and security badges to increase customer confidence and conversions."
    },
    {
      icon: Globe,
      title: "Browser Compatibility",
      description: "Compatible with 99.9% of browsers and mobile devices for universal trust."
    },
    {
      icon: CheckCircle,
      title: "SEO Benefits",
      description: "Google ranks SSL-secured websites higher in search results, improving your visibility."
    }
  ];

  return (
    <>
      <Helmet>
        <title>SSL Certificates - Secure Your Website with HTTPS | GOwithWeb</title>
        <meta name="description" content="Get SSL certificates to secure your website with HTTPS encryption. Free and premium SSL options available. Boost SEO rankings and customer trust." />
        <meta name="keywords" content="SSL certificate, HTTPS, website security, encryption, domain validation, business SSL, extended validation" />
        <link rel="canonical" href="https://gowithweb.com/ssl-security" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                    Secure Your Website with SSL
                  </h1>
                  <p className="text-xl text-white/90 mb-8">
                    Protect your visitors' data with industry-standard SSL encryption. 
                    Boost SEO rankings, increase customer trust, and secure your online presence.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" variant="secondary">
                      <Shield className="w-5 h-5 mr-2" />
                      Get Free SSL
                    </Button>
                    <Button size="lg" variant="outline">
                      Check SSL Status
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop"
                    alt="Website Security"
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Why SSL Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Why Your Website Needs SSL</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  SSL certificates are essential for modern websites, providing security, trust, and SEO benefits
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {securityFeatures.map((feature, index) => (
                  <Card key={index} className="p-6 text-center hover-lift">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* SSL Plans */}
          <section className="py-20 bg-gradient-subtle">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Choose Your SSL Certificate</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  From basic protection to enterprise-grade security, we have the right SSL solution for you
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {sslPlans.map((plan, index) => (
                  <Card key={index} className={`p-8 relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                      <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                      <p className="text-muted-foreground">{plan.description}</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-success mr-3" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${plan.popular ? 'btn-hero' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      {plan.cta}
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Security Benefits */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-4xl font-bold text-foreground mb-6">Complete Website Security</h2>
                    <p className="text-xl text-muted-foreground mb-8">
                      SSL certificates are just the beginning. We provide comprehensive security solutions 
                      to protect your website and your visitors' data.
                    </p>
                    <div className="space-y-6">
                      {[
                        {
                          title: "Data Encryption",
                          description: "All data transmitted between your website and visitors is encrypted with 256-bit SSL."
                        },
                        {
                          title: "Identity Verification",
                          description: "Verify your organization's identity with business and extended validation certificates."
                        },
                        {
                          title: "Trust Seals",
                          description: "Display security badges to increase customer confidence and conversion rates."
                        },
                        {
                          title: "SEO Boost",
                          description: "Google prioritizes HTTPS websites in search rankings, improving your visibility."
                        }
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-success mr-3 mt-1" />
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-1">{benefit.title}</h3>
                            <p className="text-muted-foreground">{benefit.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=500&h=400&fit=crop"
                      alt="Website Security Dashboard"
                      className="rounded-xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-primary/10 rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SSL Checker Tool */}
          <section className="py-20 bg-gradient-subtle">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-foreground mb-6">Check Your SSL Status</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Use our free SSL checker tool to verify your certificate status and security configuration
                </p>
                <Card className="p-8">
                  <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="flex-1">
                      <input 
                        type="url" 
                        placeholder="Enter your website URL (e.g., https://example.com)"
                        className="w-full p-4 border border-border rounded-lg bg-background text-foreground"
                      />
                    </div>
                    <Button size="lg">
                      <Shield className="w-5 h-5 mr-2" />
                      Check SSL
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Get instant analysis of your SSL certificate including validity, encryption strength, and configuration
                  </p>
                </Card>
              </div>
            </div>
          </section>

          {/* Installation Guide */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Easy SSL Installation</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Get your SSL certificate installed in minutes with our automated process
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    step: "1",
                    title: "Choose Certificate",
                    description: "Select the SSL certificate that matches your website's needs and security requirements."
                  },
                  {
                    step: "2",
                    title: "Automatic Installation",
                    description: "Our system automatically installs and configures your SSL certificate within minutes."
                  },
                  {
                    step: "3",
                    title: "Verify & Monitor",
                    description: "We verify the installation and provide ongoing monitoring to ensure your certificate stays active."
                  }
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <div className="bg-gradient-primary p-12 rounded-2xl">
                <h2 className="text-4xl font-bold text-white mb-4">Secure Your Website Today</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Don't leave your website vulnerable. Get SSL protection and boost your SEO rankings.
                </p>
                <Button size="lg" variant="secondary">
                  <Zap className="w-5 h-5 mr-2" />
                  Get SSL Certificate Now
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SSL;