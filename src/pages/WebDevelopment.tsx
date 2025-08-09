import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Code, Smartphone, Monitor, Zap, Globe, Layers, CheckCircle, ArrowRight } from 'lucide-react';

const WebDevelopment = () => {
  const services = [
    {
      icon: Monitor,
      title: "Frontend Development",
      description: "Modern, responsive user interfaces using the latest technologies and frameworks.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      price: "Starting at $2,999"
    },
    {
      icon: Code,
      title: "Backend Development",
      description: "Robust server-side solutions with secure APIs and database integration.",
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
      price: "Starting at $3,499"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Responsive designs that work perfectly across all devices and screen sizes.",
      technologies: ["PWA", "Responsive Design", "Mobile Optimization", "Touch UI"],
      price: "Starting at $1,999"
    },
    {
      icon: Layers,
      title: "Full-Stack Solutions",
      description: "Complete web applications with frontend, backend, and database integration.",
      technologies: ["MERN Stack", "Next.js", "Supabase", "Vercel"],
      price: "Starting at $4,999"
    }
  ];

  const portfolio = [
    {
      title: "E-Commerce Platform",
      category: "Online Store",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      features: ["Payment Integration", "Inventory Management", "Admin Dashboard"]
    },
    {
      title: "SaaS Dashboard",
      category: "Business Application",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
      features: ["Real-time Analytics", "User Management", "API Integration"]
    },
    {
      title: "Restaurant Website",
      category: "Business Website",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      features: ["Online Reservations", "Menu Management", "Location Finder"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Web Development Services - Custom Website & App Development | GOwithWeb</title>
        <meta name="description" content="Professional web development services including frontend, backend, and full-stack solutions. Modern responsive websites and web applications built with latest technologies." />
        <meta name="keywords" content="web development, frontend development, backend development, full-stack development, React, Next.js, responsive design" />
        <link rel="canonical" href="https://gowithweb.com/web-development" />
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
                    Custom Web Development
                  </h1>
                  <p className="text-xl text-white/90 mb-8">
                    Build powerful, scalable web applications with cutting-edge technologies. 
                    From concept to deployment, we create digital experiences that drive results.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" variant="secondary">
                      <Zap className="w-5 h-5 mr-2" />
                      Start Your Project
                    </Button>
                    <Button size="lg" variant="outline">
                      View Portfolio
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                    alt="Web Development"
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Development Services</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive web development services tailored to your business needs
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="p-8 hover-lift">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                        <p className="text-primary font-semibold">{service.price}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full group">
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Portfolio Section */}
          <section className="py-20 bg-gradient-subtle">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Recent Projects</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Showcasing our latest web development projects and success stories
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {portfolio.map((project, index) => (
                  <Card key={index} className="overflow-hidden hover-lift">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="text-sm text-primary font-semibold mb-2">{project.category}</div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                      <ul className="space-y-1 mb-4">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-success mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="w-full">
                        View Case Study
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Technology Stack */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Our Technology Stack</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  We use the latest and most reliable technologies to build your projects
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { category: "Frontend", techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
                  { category: "Backend", techs: ["Node.js", "Python", "Express", "FastAPI"] },
                  { category: "Database", techs: ["PostgreSQL", "MongoDB", "Supabase", "Redis"] },
                  { category: "Cloud & Tools", techs: ["Vercel", "AWS", "Docker", "GitHub"] }
                ].map((stack, index) => (
                  <div key={index} className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-4">{stack.category}</h3>
                    <div className="space-y-2">
                      {stack.techs.map((tech, idx) => (
                        <div key={idx} className="py-2 px-4 bg-card border border-border rounded-lg">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <div className="bg-gradient-primary p-12 rounded-2xl">
                <h2 className="text-4xl font-bold text-white mb-4">Ready to Build Your Website?</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Get a free consultation and detailed project proposal for your web development needs.
                </p>
                <Button size="lg" variant="secondary">
                  <Globe className="w-5 h-5 mr-2" />
                  Get Free Quote
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

export default WebDevelopment;