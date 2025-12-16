import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Shield, Users, Zap, ArrowRight, CheckCircle, Building } from 'lucide-react';

const DrupalProjects = () => {
  const projects = [
    {
      title: "Government Portal",
      description: "Secure, accessible government website with multi-language support",
      features: ["Accessibility (WCAG)", "Multi-language", "Secure Authentication", "Document Management"]
    },
    {
      title: "University Platform",
      description: "Large-scale educational platform with multiple departments",
      features: ["Multi-site Architecture", "Course Management", "Student Portal", "Faculty Directory"]
    },
    {
      title: "Healthcare Platform",
      description: "HIPAA-compliant healthcare information portal",
      features: ["Patient Portal", "Appointment Booking", "Secure Messaging", "Medical Records"]
    },
    {
      title: "Enterprise Intranet",
      description: "Corporate intranet with collaboration features",
      features: ["Employee Directory", "Document Sharing", "News & Events", "Workflow Management"]
    }
  ];

  const features = [
    "Enterprise-grade security",
    "Highly scalable architecture",
    "Advanced content management",
    "Multi-language support",
    "Robust access control",
    "API-first approach",
    "Headless CMS capabilities",
    "Strong community support"
  ];

  return (
    <>
      <Helmet>
        <title>Drupal Development Projects India | Enterprise CMS - SivWebAI</title>
        <meta name="description" content="Expert Drupal development in India. Enterprise portals, government websites, and complex content management solutions. View our Drupal portfolio." />
        <meta name="keywords" content="drupal development india, drupal website, enterprise CMS, drupal developer, government website" />
        <link rel="canonical" href="https://sivwebai.com/projects/drupal" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-secondary/10 via-primary/5 to-background">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <div className="text-6xl mb-6">💧</div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Drupal Development Projects
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Enterprise-grade content management with Drupal. 
                  Secure, scalable, and powerful CMS solutions.
                </p>
                <Button size="lg">
                  <Building className="w-5 h-5 mr-2" />
                  Start Drupal Project
                </Button>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Drupal Projects</h2>
                <p className="text-xl text-muted-foreground">Enterprise solutions built on Drupal</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <Card key={index} className="hover-lift">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-secondary mr-2" />
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

          {/* Features Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Why Drupal?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Drupal is the choice for complex, enterprise-level projects requiring 
                    security, scalability, and flexibility.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-secondary mr-3" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <Card className="bg-gradient-accent text-white">
                    <CardContent className="p-8">
                      <Shield className="w-12 h-12 mb-4" />
                      <h3 className="text-2xl font-bold mb-4">Enterprise Solutions</h3>
                      <p className="opacity-90 mb-6">
                        Need a robust, secure platform? Let's discuss your enterprise requirements.
                      </p>
                      <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
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

export default DrupalProjects;