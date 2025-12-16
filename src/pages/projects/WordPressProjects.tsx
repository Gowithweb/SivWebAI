import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, ShoppingCart, Zap, Shield, ArrowRight, CheckCircle, Edit } from 'lucide-react';

const WordPressProjects = () => {
  const projects = [
    {
      title: "Corporate Website",
      description: "Professional business website with modern design and SEO optimization",
      features: ["Custom Theme", "SEO Optimized", "Fast Loading", "Mobile Responsive"]
    },
    {
      title: "WooCommerce Store",
      description: "Full-featured e-commerce platform with payment integration",
      features: ["Product Catalog", "Payment Gateway", "Inventory Management", "Order Tracking"]
    },
    {
      title: "Membership Site",
      description: "Subscription-based content platform with user management",
      features: ["Membership Levels", "Content Protection", "Payment Integration", "User Dashboard"]
    },
    {
      title: "Blog & Magazine",
      description: "High-traffic content platform with advanced features",
      features: ["Custom Post Types", "Ad Integration", "Newsletter", "Social Sharing"]
    }
  ];

  const services = [
    "Custom WordPress Theme Development",
    "WooCommerce Development",
    "Plugin Development",
    "WordPress Maintenance",
    "Speed Optimization",
    "Security Hardening",
    "Migration Services",
    "SEO Optimization"
  ];

  return (
    <>
      <Helmet>
        <title>WordPress Development Projects India | WooCommerce - SivWebAI</title>
        <meta name="description" content="Expert WordPress development in India. Custom themes, WooCommerce stores, plugins, and enterprise WordPress solutions. View our WordPress portfolio." />
        <meta name="keywords" content="wordpress development india, wordpress website, woocommerce development, wordpress theme, wordpress plugin" />
        <link rel="canonical" href="https://sivwebai.com/projects/wordpress" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <div className="text-6xl mb-6">📝</div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  WordPress Development Projects
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Custom WordPress solutions powering 40% of the web. 
                  From blogs to enterprise applications.
                </p>
                <Button size="lg">
                  <Edit className="w-5 h-5 mr-2" />
                  Start WordPress Project
                </Button>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured WordPress Projects</h2>
                <p className="text-xl text-muted-foreground">Showcasing our WordPress expertise</p>
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
                            <CheckCircle className="w-4 h-4 text-primary mr-2" />
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

          {/* Services Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    WordPress Services
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Complete WordPress solutions from development to maintenance and optimization.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-3" />
                        <span className="text-foreground">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <Card className="bg-gradient-primary text-white">
                    <CardContent className="p-8">
                      <ShoppingCart className="w-12 h-12 mb-4" />
                      <h3 className="text-2xl font-bold mb-4">WooCommerce Expert</h3>
                      <p className="opacity-90 mb-6">
                        Build your online store with WooCommerce and start selling today.
                      </p>
                      <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                        Get WooCommerce Quote
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

export default WordPressProjects;