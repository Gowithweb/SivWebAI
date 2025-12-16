import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, Smartphone, Zap, Eye, Layout, Sparkles, CheckCircle } from 'lucide-react';

const WebDesign = () => {
  const designServices = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that delight users and drive conversions"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first designs that look perfect on every device and screen size"
    },
    {
      icon: Layout,
      title: "Landing Pages",
      description: "High-converting landing pages designed for maximum impact"
    },
    {
      icon: Sparkles,
      title: "Brand Identity",
      description: "Complete brand design including logos, colors, and typography"
    },
    {
      icon: Eye,
      title: "Visual Design",
      description: "Stunning visuals that capture attention and communicate your message"
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Quick prototypes to validate ideas before development"
    }
  ];

  const process = [
    { step: "01", title: "Discovery", description: "Understanding your goals, audience, and requirements" },
    { step: "02", title: "Research", description: "Competitive analysis and industry best practices" },
    { step: "03", title: "Wireframing", description: "Creating blueprints for optimal user experience" },
    { step: "04", title: "Design", description: "Crafting beautiful, functional designs" },
    { step: "05", title: "Review", description: "Collaborative refinement and iterations" },
    { step: "06", title: "Delivery", description: "Final designs and development handoff" }
  ];

  return (
    <>
      <Helmet>
        <title>Web Design Services India | UI/UX Design & Branding - SivWebAI</title>
        <meta name="description" content="Professional web design services in India. UI/UX design, responsive design, brand identity, and landing page design. Create stunning websites that convert." />
        <meta name="keywords" content="web design india, UI UX design, responsive design, brand design, landing page design, website design company" />
        <link rel="canonical" href="https://sivwebai.com/services/web-design" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-secondary/10 via-primary/5 to-background">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Creative Web Design Services
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Transform your digital presence with stunning designs that captivate your audience 
                  and drive results. From concept to completion.
                </p>
                <Button size="lg">
                  <Palette className="w-5 h-5 mr-2" />
                  Get Design Quote
                </Button>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Design Services</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive design solutions for every digital need
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {designServices.map((service, index) => (
                  <Card key={index} className="hover-lift">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
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

          {/* Process Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Design Process</h2>
                <p className="text-xl text-muted-foreground">A proven approach to creating exceptional designs</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {process.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-6xl font-bold text-primary/20 mb-4">{item.step}</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-accent text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Create Something Beautiful</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Ready to transform your brand with stunning design? Get in touch today.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Start Your Project
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default WebDesign;