import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Globe, Code, Database, Cloud, Zap, Shield, CheckCircle } from 'lucide-react';

const WebSolutions = () => {
  const solutions = [
    {
      icon: Globe,
      title: "Custom Web Applications",
      description: "Tailored web applications built to your specific business needs with modern technologies.",
      features: ["React/Next.js Development", "Progressive Web Apps", "API Integration", "Real-time Features"]
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Robust database architecture and management for scalable data solutions.",
      features: ["SQL/NoSQL Databases", "Data Migration", "Performance Optimization", "Backup & Recovery"]
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Modern cloud solutions for reliable, scalable, and secure hosting.",
      features: ["AWS/Azure/GCP", "Auto-scaling", "CDN Integration", "Monitoring & Analytics"]
    },
    {
      icon: Code,
      title: "API Development",
      description: "RESTful and GraphQL APIs for seamless integration and data exchange.",
      features: ["REST API Design", "GraphQL Implementation", "Authentication", "Rate Limiting"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Web Solutions - Custom Development & Cloud Services | GOwithWeb</title>
        <meta name="description" content="Complete web solutions including premium hosting, domain registration, SSL certificates, website management, and enterprise-grade security. Professional web services designed for modern businesses and startups." />
        <meta name="keywords" content="web solutions, premium web hosting, domain registration, SSL certificates, website management, business websites, enterprise hosting, cloud hosting, website security" />
        <link rel="canonical" href="https://gowithweb.com/web-solutions" />
        <meta property="og:title" content="Complete Web Solutions - Hosting, Domains & Security | GOwithWeb" />
        <meta property="og:description" content="Premium web hosting, domain registration, SSL certificates, and comprehensive website management solutions for businesses." />
        <meta property="og:type" content="service" />
        <meta property="og:url" content="https://gowithweb.com/web-solutions" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Web Solutions",
            "provider": {
              "@type": "Organization",
              "name": "GOwithWeb"
            },
            "description": "Complete web solutions including hosting, domains, SSL certificates, and website management",
            "serviceType": "Web Services",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Web Solutions Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Web Hosting",
                    "description": "Premium web hosting with 99.9% uptime guarantee"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Domain Registration",
                    "description": "Domain name registration and management services"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-hero">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Comprehensive Web Solutions
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                From custom applications to cloud infrastructure, we provide end-to-end web solutions 
                that drive your business forward with cutting-edge technology.
              </p>
              <Button size="lg" variant="secondary" className="mr-4">
                <Zap className="w-5 h-5 mr-2" />
                Start Your Project
              </Button>
              <Button size="lg" variant="outline">
                View Our Portfolio
              </Button>
            </div>
          </section>

          {/* Solutions Grid */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Our Web Solutions</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive technology solutions designed to meet your unique business requirements
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {solutions.map((solution, index) => (
                  <Card key={index} className="p-8 hover-lift">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                        <solution.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{solution.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-success mr-2" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-20 bg-gradient-subtle">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Our Development Process</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  A proven methodology ensuring successful project delivery from concept to launch
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { step: "01", title: "Discovery & Planning", desc: "Understanding your requirements and creating a comprehensive project roadmap" },
                  { step: "02", title: "Design & Architecture", desc: "Creating user-focused designs and robust technical architecture" },
                  { step: "03", title: "Development & Testing", desc: "Agile development with continuous testing and quality assurance" },
                  { step: "04", title: "Launch & Support", desc: "Seamless deployment with ongoing maintenance and support" }
                ].map((process, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">{process.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{process.title}</h3>
                    <p className="text-muted-foreground">{process.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <div className="bg-gradient-primary p-12 rounded-2xl">
                <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Let's discuss your project requirements and create a custom solution that drives results.
                </p>
                <Button size="lg" variant="secondary">
                  <Shield className="w-5 h-5 mr-2" />
                  Get Free Consultation
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

export default WebSolutions;