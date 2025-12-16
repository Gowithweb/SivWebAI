import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, Eye, AlertTriangle, Server, RefreshCw, CheckCircle } from 'lucide-react';

const Security = () => {
  const securityServices = [
    {
      icon: Shield,
      title: "SSL Certificates",
      description: "Free and premium SSL certificates to encrypt your website traffic and build trust"
    },
    {
      icon: Lock,
      title: "Malware Protection",
      description: "Advanced malware scanning and removal to keep your site clean and secure"
    },
    {
      icon: Eye,
      title: "Security Monitoring",
      description: "24/7 monitoring for threats, vulnerabilities, and suspicious activities"
    },
    {
      icon: AlertTriangle,
      title: "DDoS Protection",
      description: "Enterprise-grade DDoS mitigation to keep your website online during attacks"
    },
    {
      icon: Server,
      title: "Firewall Protection",
      description: "Web application firewall (WAF) to block malicious traffic and attacks"
    },
    {
      icon: RefreshCw,
      title: "Security Audits",
      description: "Comprehensive security assessments and penetration testing"
    }
  ];

  const securityFeatures = [
    "Real-time threat detection",
    "Automated vulnerability scanning",
    "Security incident response",
    "Compliance management",
    "Data encryption at rest",
    "Secure backup solutions",
    "Two-factor authentication",
    "Access control management"
  ];

  return (
    <>
      <Helmet>
        <title>Website Security Services India | SSL, Malware Protection - SivWebAI</title>
        <meta name="description" content="Comprehensive website security services in India. SSL certificates, malware protection, DDoS mitigation, security monitoring, and penetration testing." />
        <meta name="keywords" content="website security india, SSL certificates, malware protection, DDoS protection, security audit, web application firewall" />
        <link rel="canonical" href="https://sivwebai.com/services/security" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-success/10 via-primary/5 to-background">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Website Security Services
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Protect your digital assets with enterprise-grade security solutions. 
                  From SSL certificates to advanced threat protection.
                </p>
                <Button size="lg">
                  <Shield className="w-5 h-5 mr-2" />
                  Get Security Assessment
                </Button>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Security Services</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive protection for your online presence
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {securityServices.map((service, index) => (
                  <Card key={index} className="hover-lift">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-success rounded-lg flex items-center justify-center mb-4">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Complete Security Coverage
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Our security solutions provide multi-layered protection to safeguard your 
                    website from all types of cyber threats.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {securityFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-success mr-3" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                    <Shield className="w-16 h-16 mb-6 opacity-90" />
                    <h3 className="text-2xl font-bold mb-4">Free Security Scan</h3>
                    <p className="opacity-90 mb-6">
                      Get a comprehensive security assessment of your website at no cost. 
                      Identify vulnerabilities before hackers do.
                    </p>
                    <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                      Run Free Scan
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-success text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Secure Your Website Today</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Don't wait for a security breach. Protect your website and customer data now.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-success hover:bg-white/90">
                Get Started with Security
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Security;