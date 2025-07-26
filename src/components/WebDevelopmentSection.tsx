import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Palette, 
  Smartphone, 
  ShoppingCart, 
  Zap, 
  Layers,
  Database,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Rocket
} from 'lucide-react';

const WebDevelopmentSection = () => {
  const services = [
    {
      icon: Code,
      title: "React Development",
      description: "Modern, fast, and scalable React applications with latest features",
      technologies: ["React 18", "TypeScript", "Tailwind CSS", "Vite"],
      features: ["Component Library", "State Management", "Performance Optimization", "SEO Ready"],
      price: "Starting ₹25,000",
      popular: false,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Rocket,
      title: "Next.js Development",
      description: "Full-stack Next.js applications with SSR, SSG, and API routes",
      technologies: ["Next.js 14", "App Router", "Server Components", "Vercel"],
      features: ["Server-Side Rendering", "Static Generation", "API Routes", "Image Optimization"],
      price: "Starting ₹35,000",
      popular: true,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "WordPress Development",
      description: "Custom WordPress themes, plugins, and complete CMS solutions",
      technologies: ["WordPress", "PHP", "MySQL", "Custom Themes"],
      features: ["Custom Themes", "Plugin Development", "WooCommerce", "Performance Optimization"],
      price: "Starting ₹15,000",
      popular: true,
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Layers,
      title: "Drupal Development",
      description: "Enterprise-grade Drupal websites with custom modules and themes",
      technologies: ["Drupal 10", "PHP", "Twig", "Custom Modules"],
      features: ["Custom Modules", "Multi-site Setup", "Content Architecture", "Security Hardening"],
      price: "Starting ₹30,000",
      popular: false,
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration and inventory management",
      technologies: ["WooCommerce", "Shopify", "Stripe", "PayPal"],
      features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Mobile Responsive"],
      price: "Starting ₹40,000",
      popular: false,
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Responsive web applications optimized for all devices and screen sizes",
      technologies: ["Responsive Design", "PWA", "Mobile Optimization", "Touch UI"],
      features: ["Progressive Web App", "Offline Support", "Touch Gestures", "App-like Experience"],
      price: "Starting ₹20,000",
      popular: false,
      gradient: "from-teal-500 to-green-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-friendly designs that convert visitors to customers",
      technologies: ["Figma", "Adobe XD", "Prototype", "User Research"],
      features: ["User Research", "Wireframing", "Prototyping", "Design System"],
      price: "Starting ₹12,000",
      popular: false,
      gradient: "from-pink-500 to-purple-500"
    },
    {
      icon: Database,
      title: "Full-Stack Development",
      description: "Complete web applications with backend APIs and database integration",
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
      features: ["REST APIs", "Database Design", "Authentication", "Real-time Features"],
      price: "Starting ₹50,000",
      popular: false,
      gradient: "from-gray-600 to-gray-800"
    }
  ];

  const portfolioItems = [
    { name: "E-commerce Store", tech: "React + Node.js", image: "🛒", desc: "Modern shopping platform" },
    { name: "Corporate Website", tech: "WordPress", image: "🏢", desc: "Professional business site" },
    { name: "SaaS Dashboard", tech: "Next.js", image: "📊", desc: "Analytics and reporting" },
    { name: "Mobile App", tech: "React Native", image: "📱", desc: "Cross-platform mobile app" },
    { name: "Restaurant Website", tech: "WordPress", image: "🍽️", desc: "Online ordering system" },
    { name: "Healthcare Portal", tech: "React + TypeScript", image: "🏥", desc: "Patient management system" },
    { name: "Real Estate Platform", tech: "Next.js + Prisma", image: "🏠", desc: "Property listing website" },
    { name: "Learning Management", tech: "Vue.js + Laravel", image: "📚", desc: "Online education platform" }
  ];

  return (
    <section id="web-development" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-accent-bright/10 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-accent-bright bg-clip-text text-transparent mb-4">
            <Code className="w-8 h-8 text-primary animate-glow" />
            <span className="text-sm font-semibold uppercase tracking-wider">Web Development</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Modern Web
            <span className="bg-gradient-to-r from-primary via-secondary to-accent-bright bg-clip-text text-transparent"> Development</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Custom React, Next.js, WordPress, and Drupal development services. We create fast, scalable, and SEO-optimized websites that drive results for your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`hover-lift shadow-md border-0 bg-gradient-card relative overflow-hidden group ${
                service.popular ? 'ring-2 ring-primary shadow-primary' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-secondary to-secondary-glow text-white px-4 py-1 rounded-full flex items-center shadow-lg border-0 animate-pulse-slow">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {service.technologies.slice(0, 2).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs px-2 py-1">
                      {tech}
                    </Badge>
                  ))}
                  {service.technologies.length > 2 && (
                    <Badge variant="outline" className="text-xs px-2 py-1">
                      +{service.technologies.length - 2}
                    </Badge>
                  )}
                </div>

                {/* Key Features */}
                <ul className="space-y-1 mb-4 text-xs">
                  {service.features.slice(0, 2).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-muted-foreground">
                      <CheckCircle className="w-3 h-3 text-success mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="text-lg font-bold text-primary mb-4">{service.price}</div>
                
                <Button 
                  className={`w-full ${service.popular ? 'btn-hero' : 'btn-secondary'} group`}
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Portfolio Preview */}
        <div className="bg-gradient-card rounded-2xl p-8 shadow-xl mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Recent Work</h3>
            <p className="text-muted-foreground">Check out some of our latest web development projects</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-background/50 hover-lift group cursor-pointer border border-border/50 hover:border-primary/30 transition-all">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{item.image}</div>
                <h4 className="font-semibold text-foreground mb-2">{item.name}</h4>
                <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
                <Badge variant="outline" className="text-xs bg-gradient-primary text-white border-0">{item.tech}</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-foreground">Our Development Process</h3>
            
            <div className="space-y-6">
              {[
                { step: "01", title: "Discovery & Planning", desc: "Understanding your requirements and creating a detailed project roadmap" },
                { step: "02", title: "Design & Prototype", desc: "Creating wireframes, designs, and interactive prototypes for approval" },
                { step: "03", title: "Development & Testing", desc: "Building your website with clean code and thorough testing" },
                { step: "04", title: "Launch & Support", desc: "Deploying your website and providing ongoing maintenance support" }
              ].map((process, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {process.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{process.title}</h4>
                    <p className="text-sm text-muted-foreground">{process.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent-bright/10 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-foreground mb-6">Why Choose Our Development Services?</h4>
            <div className="space-y-4">
              {[
                "100% Custom Development - No Templates",
                "SEO Optimized & Performance Focused",
                "Mobile-First Responsive Design",
                "Clean, Maintainable Code",
                "Free 3 Months Support & Maintenance",
                "Fast Delivery & Agile Methodology"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button className="btn-hero">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentSection;