import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Globe, 
  Server, 
  Shield, 
  Search, 
  Megaphone, 
  Code, 
  Database, 
  Cloud, 
  Smartphone,
  ShoppingCart,
  Users,
  BarChart3,
  Zap,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';
import securityServicesImg from '@/assets/security-services.jpg';
import databaseServicesImg from '@/assets/database-services.jpg';
import cloudServicesImg from '@/assets/cloud-services.jpg';
import analyticsServicesImg from '@/assets/analytics-services.jpg';
import servicesHeroImg from '@/assets/services-hero.jpg';

const Services = () => {
  const mainServices = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["React & Next.js", "Full-Stack Development", "API Integration", "Responsive Design"],
      price: "From ₹49,999",
      popular: true
    },
    {
      icon: Globe,
      title: "Domain & Hosting",
      description: "Secure domain registration and high-performance hosting solutions",
      features: ["Free SSL Certificate", "99.9% Uptime", "Daily Backups", "24/7 Support"],
      price: "From ₹99/month",
      popular: false
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your search rankings and drive organic traffic",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Monthly Reports"],
      price: "From ₹14,999/month",
      popular: true
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your business",
      features: ["Social Media Marketing", "PPC Campaigns", "Content Marketing", "Analytics"],
      price: "From ₹24,999/month",
      popular: false
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online store setup with payment integration",
      features: ["Shopping Cart", "Payment Gateway", "Inventory Management", "Order Tracking"],
      price: "From ₹79,999",
      popular: true
    },
    {
      icon: Smartphone,
      title: "Technical Support",
      description: "24/7 troubleshooting and maintenance services",
      features: ["Bug Fixes", "Performance Optimization", "Security Updates", "Emergency Support"],
      price: "From ₹9,999/month",
      popular: false
    }
  ];

  const additionalServices = [
    {
      icon: Shield,
      category: "Security",
      services: ["SSL Certificates", "Security Audits", "Malware Protection", "Firewall Setup"],
      image: securityServicesImg
    },
    {
      icon: Database,
      category: "Database Management",
      services: ["Database Design", "Migration Services", "Performance Optimization", "Backup Solutions"],
      image: databaseServicesImg
    },
    {
      icon: Cloud,
      category: "Cloud Services",
      services: ["Cloud Migration", "AWS/Azure Setup", "Server Management", "CDN Configuration"],
      image: cloudServicesImg
    },
    {
      icon: BarChart3,
      category: "Analytics & Reporting",
      services: ["Google Analytics", "Custom Dashboards", "Performance Reports", "Conversion Tracking"],
      image: analyticsServicesImg
    }
  ];

  const whyChooseUs = [
    "10+ Years of Experience",
    "500+ Projects Completed",
    "99.9% Client Satisfaction",
    "24/7 Technical Support",
    "Money-Back Guarantee",
    "Free Consultation"
  ];

  return (
    <>
      <Helmet>
        <title>Complete Web Services - SivWebAI | Development, Hosting & Support</title>
        <meta name="description" content="End-to-end web solutions: development, hosting, SEO, support & troubleshooting. SivWebAI handles all your website needs with 24/7 expert assistance." />
        <meta name="keywords" content="web services, web development, hosting, SEO services, digital marketing, e-commerce, technical support, SivWebAI" />
        <link rel="canonical" href="https://sivwebai.com/services" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section with Image */}
          <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src={servicesHeroImg} 
                alt="Complete Web Services by SivWebAI"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-2xl">
                <Badge className="mb-6 bg-gradient-to-r from-primary to-secondary text-white border-0">
                  Professional Services
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                  Complete Web Services
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  From development to hosting, troubleshooting to ongoing support - we handle all your website needs with cutting-edge technology and 24/7 expert assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-accent-bright to-warning text-white font-bold" size="lg">
                    Get Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-foreground">
                    View Pricing
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Main Services */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Our Core Services</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Professional web solutions designed to elevate your business and drive growth
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mainServices.map((service, index) => (
                  <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                    {service.popular && (
                      <Badge className="absolute top-4 right-4 bg-gradient-primary text-white border-0">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                    
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-success mr-2" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{service.price}</span>
                        <Button variant="outline" className="group">
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Additional Services */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Additional Services</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Specialized services to support and enhance your digital presence
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {additionalServices.map((category, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="relative h-48">
                      <img 
                        src={category.image} 
                        alt={category.category}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                          <category.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.services.map((service, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <CheckCircle className="w-3 h-3 text-success mr-2" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Why Choose GOwithWeb?</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {whyChooseUs.map((reason, index) => (
                    <div key={index} className="flex items-center justify-center p-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-success mr-2" />
                      <span className="font-medium">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of satisfied clients who trust us with their digital success
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Your Project Today
                </Button>
                <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
                  <Users className="w-5 h-5 mr-2" />
                  Talk to Our Team
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

export default Services;