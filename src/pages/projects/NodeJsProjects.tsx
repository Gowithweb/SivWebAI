import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Server, Database, Zap, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const NodeJsProjects = () => {
  const projects = [
    {
      title: "RESTful API Platform",
      description: "Scalable API backend serving millions of requests daily",
      technologies: ["Node.js", "Express", "MongoDB", "Redis"],
      features: ["Rate Limiting", "Authentication", "Caching", "Documentation"]
    },
    {
      title: "Real-time Chat Application",
      description: "Enterprise messaging platform with real-time features",
      technologies: ["Node.js", "Socket.io", "PostgreSQL", "AWS"],
      features: ["Real-time Messaging", "File Sharing", "Group Chats", "Notifications"]
    },
    {
      title: "Payment Processing System",
      description: "Secure payment gateway integration and processing",
      technologies: ["Node.js", "Stripe", "PostgreSQL", "Docker"],
      features: ["Multi-currency", "Recurring Payments", "Fraud Detection", "Reporting"]
    },
    {
      title: "IoT Data Platform",
      description: "High-throughput data ingestion from IoT devices",
      technologies: ["Node.js", "MQTT", "TimescaleDB", "Grafana"],
      features: ["Device Management", "Real-time Data", "Analytics", "Alerts"]
    }
  ];

  const capabilities = [
    "High-performance event-driven architecture",
    "Non-blocking I/O for scalability",
    "NPM ecosystem with 1M+ packages",
    "Microservices architecture support",
    "Real-time application development",
    "Cross-platform compatibility"
  ];

  return (
    <>
      <Helmet>
        <title>Node.js Development Projects India | Backend Solutions - SivWebAI</title>
        <meta name="description" content="Expert Node.js development projects in India. APIs, real-time applications, microservices, and scalable backend solutions. View our Node.js portfolio." />
        <meta name="keywords" content="node.js development india, backend development, API development, microservices, node.js developer" />
        <link rel="canonical" href="https://sivwebai.com/projects/nodejs" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-success/10 via-primary/5 to-background">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <div className="text-6xl mb-6">🟢</div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Node.js Development Projects
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Scalable, high-performance backend solutions built with Node.js. 
                  APIs, microservices, and real-time applications.
                </p>
                <Button size="lg">
                  <Server className="w-5 h-5 mr-2" />
                  Start Node.js Project
                </Button>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Node.js Projects</h2>
                <p className="text-xl text-muted-foreground">Powerful backend solutions we've built</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <Card key={index} className="hover-lift">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-success/10 text-success px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-success mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Capabilities Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Node.js Capabilities
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Build lightning-fast, scalable applications with Node.js - the runtime that 
                    powers modern web applications.
                  </p>
                  <div className="space-y-4">
                    {capabilities.map((capability, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-success mr-3" />
                        <span className="text-foreground">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <Card className="bg-gradient-success text-white">
                    <CardContent className="p-8">
                      <Database className="w-12 h-12 mb-4" />
                      <h3 className="text-2xl font-bold mb-4">Backend Consultation</h3>
                      <p className="opacity-90 mb-6">
                        Get expert advice on your backend architecture and scalability needs.
                      </p>
                      <Button variant="secondary" className="bg-white text-success hover:bg-white/90">
                        Book Consultation
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
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

export default NodeJsProjects;