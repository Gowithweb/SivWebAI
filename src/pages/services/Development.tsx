import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Globe, Smartphone, Server, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const Development = () => {
  const technologies = [
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "Vue.js", icon: "💚", category: "Frontend" },
    { name: "Angular", icon: "🅰️", category: "Frontend" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "Python", icon: "🐍", category: "Backend" },
    { name: "PHP", icon: "🐘", category: "Backend" },
    { name: "Laravel", icon: "🔴", category: "Backend" },
    { name: "WordPress", icon: "📝", category: "CMS" },
    { name: "Drupal", icon: "💧", category: "CMS" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "PostgreSQL", icon: "🐘", category: "Database" },
    { name: "AWS", icon: "☁️", category: "Cloud" }
  ];

  const services = [
    {
      icon: Globe,
      title: "Custom Web Development",
      description: "Tailored web applications built with modern technologies to meet your unique business requirements"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform and native mobile applications for iOS and Android devices"
    },
    {
      icon: Database,
      title: "API Development",
      description: "Robust RESTful and GraphQL APIs for seamless system integration"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Scalable server-side solutions with modern frameworks and best practices"
    },
    {
      icon: Code,
      title: "E-commerce Solutions",
      description: "Custom online stores with payment integration and inventory management"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your existing applications and improve user experience"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Web Development Services India | Custom Web Applications - SivWebAI</title>
        <meta name="description" content="Professional web development services in India. React, Node.js, PHP, Laravel, WordPress development. Custom web applications, APIs, and e-commerce solutions." />
        <meta name="keywords" content="web development india, custom web application, React development, Node.js development, PHP development, Laravel, WordPress development" />
        <link rel="canonical" href="https://sivwebai.com/services/development" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Custom Web Development Services
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Build powerful, scalable web applications with cutting-edge technologies. 
                  From startups to enterprises, we deliver solutions that drive growth.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg">
                    <Code className="w-5 h-5 mr-2" />
                    Start Your Project
                  </Button>
                  <Button size="lg" variant="outline">
                    View Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Development Services</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  End-to-end development solutions for your digital needs
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="hover-lift">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
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

          {/* Technologies Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technologies We Use</h2>
                <p className="text-xl text-muted-foreground">Modern tech stack for robust solutions</p>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {technologies.map((tech, index) => (
                  <Card key={index} className="text-center hover-lift">
                    <CardContent className="p-4">
                      <div className="text-3xl mb-2">{tech.icon}</div>
                      <h3 className="font-semibold text-sm">{tech.name}</h3>
                      <span className="text-xs text-muted-foreground">{tech.category}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-primary text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Project?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's discuss your requirements and create a solution that exceeds expectations.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Get Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Development;