import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Zap, Shield, Globe, ArrowRight, CheckCircle } from 'lucide-react';

const ReactProjects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-featured online store with cart, payments, and inventory management",
      technologies: ["React", "Redux", "Node.js", "Stripe"],
      features: ["Product Management", "Shopping Cart", "Payment Integration", "Order Tracking"]
    },
    {
      title: "Admin Dashboard",
      description: "Comprehensive admin panel with analytics and user management",
      technologies: ["React", "TypeScript", "Recharts", "TailwindCSS"],
      features: ["Analytics Dashboard", "User Management", "Role-based Access", "Real-time Updates"]
    },
    {
      title: "Social Media App",
      description: "Modern social platform with real-time features and media sharing",
      technologies: ["React", "Firebase", "Socket.io", "Cloudinary"],
      features: ["Real-time Chat", "Media Upload", "News Feed", "Notifications"]
    },
    {
      title: "Learning Management System",
      description: "Complete LMS with courses, quizzes, and progress tracking",
      technologies: ["React", "GraphQL", "PostgreSQL", "AWS S3"],
      features: ["Course Creation", "Video Streaming", "Quiz System", "Certificates"]
    }
  ];

  const benefits = [
    "Component-based architecture for reusability",
    "Virtual DOM for optimal performance",
    "Large ecosystem of libraries and tools",
    "Excellent developer experience",
    "Strong community support",
    "SEO-friendly with Next.js"
  ];

  return (
    <>
      <Helmet>
        <title>React Development Projects India | React.js Solutions - SivWebAI</title>
        <meta name="description" content="Expert React development projects in India. Custom React applications, dashboards, e-commerce, and enterprise solutions. View our React portfolio." />
        <meta name="keywords" content="react development india, react projects, react.js development, custom react applications, react developer" />
        <link rel="canonical" href="https://sivwebai.com/projects/react" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <div className="text-6xl mb-6">⚛️</div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  React Development Projects
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Modern, high-performance web applications built with React. 
                  From startups to enterprises, we deliver excellence.
                </p>
                <Button size="lg">
                  <Code className="w-5 h-5 mr-2" />
                  Start React Project
                </Button>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured React Projects</h2>
                <p className="text-xl text-muted-foreground">Showcasing our React development expertise</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <Card key={index} className="hover-lift">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
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

          {/* Benefits Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Why Choose React?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    React is the industry-leading JavaScript library for building user interfaces, 
                    trusted by millions of developers worldwide.
                  </p>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-3" />
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <Card className="bg-gradient-primary text-white">
                    <CardContent className="p-8">
                      <Zap className="w-12 h-12 mb-4" />
                      <h3 className="text-2xl font-bold mb-4">Get a Free Quote</h3>
                      <p className="opacity-90 mb-6">
                        Tell us about your React project and get a detailed estimate within 24 hours.
                      </p>
                      <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                        Request Quote
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

export default ReactProjects;