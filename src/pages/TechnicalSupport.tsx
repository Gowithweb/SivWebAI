import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Headphones, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  MessageCircle,
  Video,
  Mail,
  Phone,
  FileText,
  Download,
  ExternalLink,
  Server,
  Shield,
  Settings,
  Database,
  Globe,
  Smartphone,
  Code,
  Search,
  LifeBuoy,
  Star,
  Zap
} from 'lucide-react';

const TechnicalSupport = () => {
  const supportPlans = [
    {
      name: "Basic Support",
      price: "Free",
      description: "Essential support for getting started",
      features: [
        "Email Support (48h response)",
        "Basic Documentation Access",
        "Community Forum Access",
        "Self-Service Portal"
      ],
      popular: false,
      buttonText: "Get Started"
    },
    {
      name: "Professional Support",
      price: "$99/month",
      description: "Priority support for growing businesses",
      features: [
        "24/7 Email & Chat Support",
        "Phone Support (Business Hours)",
        "Priority Response (4h)",
        "Advanced Documentation",
        "Video Tutorials Access",
        "Monthly Health Checks"
      ],
      popular: true,
      buttonText: "Choose Professional"
    },
    {
      name: "Enterprise Support",
      price: "$299/month",
      description: "Dedicated support for enterprise clients",
      features: [
        "24/7 Phone & Email Support",
        "Dedicated Account Manager",
        "Priority Response (1h)",
        "On-site Support Available",
        "Custom Training Sessions",
        "Weekly Health Reports",
        "Direct Developer Access"
      ],
      popular: false,
      buttonText: "Contact Sales"
    }
  ];

  const supportServices = [
    {
      icon: Server,
      title: "Website Maintenance",
      description: "Keep your website running smoothly with regular updates and monitoring",
      services: ["Security Updates", "Content Updates", "Performance Optimization", "Backup Management"]
    },
    {
      icon: Shield,
      title: "Security Services",
      description: "Protect your website from threats with comprehensive security solutions",
      services: ["SSL Certificate Setup", "Malware Scanning", "Firewall Configuration", "Security Audits"]
    },
    {
      icon: Database,
      title: "Database Support",
      description: "Expert database management and optimization services",
      services: ["Database Optimization", "Migration Services", "Backup & Recovery", "Performance Tuning"]
    },
    {
      icon: Settings,
      title: "Technical Configuration",
      description: "Professional setup and configuration of your web infrastructure",
      services: ["Server Setup", "Domain Configuration", "Email Setup", "CDN Configuration"]
    },
    {
      icon: Code,
      title: "Development Support",
      description: "Ongoing development support for custom features and integrations",
      services: ["Bug Fixes", "Feature Development", "API Integration", "Code Reviews"]
    },
    {
      icon: Search,
      title: "SEO Technical Support",
      description: "Technical SEO services to improve your search rankings",
      services: ["Site Speed Optimization", "Schema Markup", "Technical Audits", "Core Web Vitals"]
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help with our 24/7 live chat support",
      availability: "24/7 Available",
      responseTime: "Instant",
      color: "bg-green-500"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      availability: "Mon-Fri 9AM-6PM",
      responseTime: "Immediate",
      color: "bg-blue-500"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed technical assistance via email",
      availability: "24/7 Available",
      responseTime: "1-4 hours",
      color: "bg-purple-500"
    },
    {
      icon: Video,
      title: "Video Consultation",
      description: "Screen sharing sessions for complex issues",
      availability: "By Appointment",
      responseTime: "Same Day",
      color: "bg-orange-500"
    }
  ];

  const faqs = [
    {
      question: "What's included in technical support?",
      answer: "Our technical support includes website maintenance, security monitoring, performance optimization, bug fixes, and general technical assistance. The specific services depend on your support plan."
    },
    {
      question: "How quickly do you respond to support requests?",
      answer: "Response times vary by support plan: Basic (48 hours), Professional (4 hours), Enterprise (1 hour). Emergency issues are prioritized across all plans."
    },
    {
      question: "Do you provide 24/7 support?",
      answer: "Yes, our Professional and Enterprise plans include 24/7 support. Basic plan users have access to email support and our knowledge base around the clock."
    },
    {
      question: "Can you help with website migrations?",
      answer: "Absolutely! We provide comprehensive migration services including domain transfers, content migration, database migration, and ensuring zero downtime during the process."
    },
    {
      question: "What if my website goes down?",
      answer: "We monitor all supported websites 24/7. If an issue is detected, our team is automatically notified and begins working on a resolution immediately. Enterprise clients get priority handling."
    },
    {
      question: "Do you provide training for my team?",
      answer: "Yes, we offer training sessions for content management, basic troubleshooting, and best practices. Enterprise clients receive custom training tailored to their specific needs."
    },
    {
      question: "Is remote access included in support?",
      answer: "With your permission, our Professional and Enterprise support includes remote access capabilities to diagnose and fix issues more efficiently."
    },
    {
      question: "What about emergency support?",
      answer: "All plans include emergency support for critical issues. Enterprise clients have a dedicated emergency hotline with guaranteed 1-hour response time."
    }
  ];

  const resources = [
    {
      title: "Getting Started Guide",
      description: "Complete guide to setting up and managing your website",
      type: "PDF Guide",
      icon: FileText
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video tutorials for common tasks",
      type: "Video Series",
      icon: Video
    },
    {
      title: "API Documentation",
      description: "Complete API reference and integration guides",
      type: "Documentation",
      icon: Code
    },
    {
      title: "Best Practices",
      description: "Industry best practices and optimization tips",
      type: "Guidelines",
      icon: CheckCircle
    }
  ];

  return (
    <>
      <Helmet>
        <title>Technical Support - GOwithWeb | 24/7 Expert Web Support Services</title>
        <meta name="description" content="Professional technical support for websites, applications, and digital infrastructure. 24/7 expert assistance, maintenance, security, and emergency support services." />
        <meta name="keywords" content="technical support, website maintenance, 24/7 support, web hosting support, emergency support, technical assistance, website security" />
        <link rel="canonical" href="https://gowithweb.com/technical-support" />
        <meta property="og:title" content="24/7 Technical Support - Expert Web Support Services" />
        <meta property="og:description" content="Professional technical support and maintenance services for websites and web applications. Expert assistance when you need it most." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gowithweb.com/technical-support" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Technical Support Services",
            "provider": {
              "@type": "Organization",
              "name": "GOwithWeb"
            },
            "serviceType": "Technical Support and Maintenance",
            "description": "24/7 technical support for websites and web applications"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-4xl mx-auto">
                <Badge className="mb-6 bg-gradient-primary text-white border-0">
                  <LifeBuoy className="w-4 h-4 mr-2" />
                  Expert Support
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  24/7 Technical Support
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Professional technical support and maintenance services to keep your website 
                  running smoothly. Expert assistance whenever you need it.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg" className="group">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Start Live Chat
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="lg">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Support
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Support Stats */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-muted-foreground">Issue Resolution</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">&lt;1hr</div>
                  <div className="text-muted-foreground">Average Response</div>
                </div>
              </div>
            </div>
          </section>

          {/* Support Plans */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Support Plans</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Choose the right level of support for your business needs
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {supportPlans.map((plan, index) => (
                  <Card key={index} className={`relative overflow-hidden ${plan.popular ? 'border-2 border-primary shadow-xl scale-105' : ''}`}>
                    {plan.popular && (
                      <Badge className="absolute top-4 right-4 bg-gradient-primary text-white border-0">
                        <Star className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    )}
                    
                    <CardHeader className="text-center pb-8">
                      <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                      <CardDescription className="text-base">{plan.description}</CardDescription>
                      <div className="text-4xl font-bold text-primary mt-4">{plan.price}</div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-success mr-3" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      
                      <Button 
                        variant={plan.popular ? "hero" : "outline"} 
                        className="w-full mt-6"
                      >
                        {plan.buttonText}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Support Services */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Support Services</h2>
                <p className="text-xl text-muted-foreground">
                  Comprehensive technical services to keep your digital presence optimized
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {supportServices.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.services.map((item, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-success mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Support Channels */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Get Help Your Way</h2>
                <p className="text-xl text-muted-foreground">
                  Multiple ways to connect with our support team
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {supportChannels.map((channel, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className={`w-16 h-16 ${channel.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <channel.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-lg">{channel.title}</CardTitle>
                      <CardDescription>{channel.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="text-sm">
                        <span className="font-medium">Availability: </span>
                        <span className="text-muted-foreground">{channel.availability}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Response: </span>
                        <span className="text-success">{channel.responseTime}</span>
                      </div>
                      <Button variant="outline" size="sm" className="mt-4">
                        Connect Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                  <p className="text-xl text-muted-foreground">
                    Quick answers to common support questions
                  </p>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg px-6">
                      <AccordionTrigger className="text-left font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* Resources */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Self-Help Resources</h2>
                <p className="text-xl text-muted-foreground">
                  Comprehensive documentation and tutorials to help you succeed
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {resources.map((resource, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <resource.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Badge variant="outline" className="mb-4">{resource.type}</Badge>
                      <Button variant="outline" size="sm" className="group">
                        <Download className="w-4 h-4 mr-2" />
                        Access Resource
                        <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Emergency Support CTA */}
          <section className="py-20 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-4">Need Emergency Support?</h2>
                <p className="text-xl mb-8 opacity-90">
                  Critical website issues? Our emergency response team is available 24/7 
                  to get your site back online quickly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" size="lg" className="bg-white text-red-600 hover:bg-white/90">
                    <Phone className="w-5 h-5 mr-2" />
                    Emergency Hotline
                  </Button>
                  <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Emergency Chat
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TechnicalSupport;