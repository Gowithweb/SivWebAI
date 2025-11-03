import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Globe, 
  Server, 
  Cloud, 
  Monitor, 
  Mail, 
  Shield, 
  Database, 
  Settings,
  Zap,
  HardDrive,
  Wifi,
  Lock
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Domain Registration",
      description: "AI Domain Registration (.ai, .in, .com) with free WHOIS protection",
      features: ["Free domain with hosting", "Multiple extensions", "Easy management"],
      popular: false
    },
    {
      icon: Server,
      title: "Shared Web Hosting",
      description: "Best WordPress hosting India with unlimited bandwidth and free SSL",
      features: ["3 months free", "Free website migration", "24/7 monitoring"],
      popular: true
    },
    {
      icon: Cloud,
      title: "VPS Hosting",
      description: "Secure VPS with control panel for developers and businesses",
      features: ["Linux & Windows VPS", "Root access", "HA Cluster available"],
      popular: false
    },
    {
      icon: HardDrive,
      title: "Dedicated Servers",
      description: "Dedicated Linux & Windows servers with enterprise-grade performance",
      features: ["Full control", "High performance", "Custom configurations"],
      popular: false
    },
    {
      icon: Mail,
      title: "Email Hosting",
      description: "G Suite email hosting provider with secure business email solutions",
      features: ["Professional email", "G-Suite integration", "Spam protection"],
      popular: false
    },
    {
      icon: Shield,
      title: "SSL Certificates",
      description: "Free and premium SSL certificates for website security",
      features: ["Free SSL included", "Wildcard SSL", "Extended validation"],
      popular: false
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Database clusters and managed database hosting services",
      features: ["MySQL clusters", "PostgreSQL", "MongoDB hosting"],
      popular: false
    },
    {
      icon: Settings,
      title: "Kubernetes Hosting",
      description: "Kubernetes & ERP hosting solutions for modern applications",
      features: ["Container orchestration", "Auto-scaling", "Load balancing"],
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Web Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From domain registration to enterprise hosting, we provide complete web hosting India solutions with premium features and 24/7 support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-container">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`interactive-card shine-effect shadow-custom ${service.popular ? 'ring-2 ring-primary shadow-primary' : ''} bg-gradient-card border-0`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 rotate-on-hover">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <Zap className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${service.popular ? 'btn-hero' : 'btn-secondary'}`}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services Banner */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-custom">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Complete Web Solutions Provider
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Premium hosting for businesses, Laravel & Node.js server hosting, reseller hosting plans India, ecommerce hosting with SSL, and much more.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                WordPress Hosting
              </span>
              <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
                Reseller Hosting
              </span>
              <span className="bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium">
                Ecommerce Hosting
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Enterprise Solutions
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;