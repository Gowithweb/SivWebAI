import { Helmet } from 'react-helmet-async';
import { Bot, Brain, Cpu, MessageSquare, Eye, FileText, Zap, Code, Database, Globe, ShoppingCart, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AIServices = () => {
  const aiServices = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "AI Chatbots & Virtual Assistants",
      description: "Custom AI-powered chatbots for customer service, lead generation, and user engagement",
      features: ["24/7 Customer Support", "Multi-language Support", "CRM Integration", "Natural Language Processing"],
      pricing: "Starting at $299/month",
      popular: true
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning Solutions",
      description: "Custom ML models for business automation, predictive analytics, and intelligent insights",
      features: ["Predictive Analytics", "Data Mining", "Pattern Recognition", "Automated Decision Making"],
      pricing: "Starting at $899/month"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Computer Vision & Image AI",
      description: "Image recognition, object detection, and visual analysis solutions",
      features: ["Image Classification", "Object Detection", "Facial Recognition", "OCR Technology"],
      pricing: "Starting at $599/month"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "AI Content Generation",
      description: "Automated content creation for blogs, marketing materials, and documentation",
      features: ["SEO-Optimized Content", "Multi-format Output", "Brand Voice Training", "Content Planning"],
      pricing: "Starting at $199/month"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "AI-Powered Analytics",
      description: "Advanced business intelligence with AI-driven insights and recommendations",
      features: ["Real-time Analytics", "Predictive Forecasting", "Automated Reporting", "Data Visualization"],
      pricing: "Starting at $499/month"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI Code Assistant",
      description: "AI-powered development tools for code generation, review, and optimization",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Documentation"],
      pricing: "Starting at $149/month"
    }
  ];

  const technologies = [
    { name: "OpenAI GPT", logo: "🤖" },
    { name: "TensorFlow", logo: "🧠" },
    { name: "PyTorch", logo: "🔥" },
    { name: "Hugging Face", logo: "🤗" },
    { name: "AWS AI/ML", logo: "☁️" },
    { name: "Google AI", logo: "🔍" },
    { name: "Azure AI", logo: "🌐" },
    { name: "IBM Watson", logo: "💡" }
  ];

  const useCases = [
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "E-commerce Optimization",
      description: "AI-powered product recommendations, inventory management, and customer behavior analysis"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Processing & Analysis",
      description: "Automated data extraction, cleaning, and analysis for business intelligence"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Digital Marketing Automation",
      description: "AI-driven campaign optimization, audience targeting, and content personalization"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Process Automation",
      description: "Intelligent workflow automation and business process optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      <Helmet>
        <title>AI Services | Advanced Artificial Intelligence Solutions - GOwithWeb</title>
        <meta name="description" content="Transform your business with our cutting-edge AI services. Custom chatbots, machine learning, computer vision, and AI-powered automation solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, computer vision, automation, OpenAI, TensorFlow" />
        <link rel="canonical" href="https://gowithweb.com/ai-services" />
        
        <meta property="og:title" content="AI Services | Advanced Artificial Intelligence Solutions - GOwithWeb" />
        <meta property="og:description" content="Transform your business with our cutting-edge AI services. Custom chatbots, machine learning, computer vision, and AI-powered automation solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gowithweb.com/ai-services" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Services | Advanced Artificial Intelligence Solutions - GOwithWeb" />
        <meta name="twitter:description" content="Transform your business with our cutting-edge AI services. Custom chatbots, machine learning, computer vision, and AI-powered automation solutions." />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center items-center space-x-2 mb-6">
                <Bot className="w-12 h-12 text-primary animate-pulse" />
                <h1 className="text-4xl md:text-6xl font-bold gradient-text">
                  AI Services
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Harness the power of Artificial Intelligence to transform your business operations, 
                enhance customer experiences, and drive unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-hero group">
                  <Zap className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Start AI Transformation
                </Button>
                <Button size="lg" variant="outline" className="btn-outline-hero">
                  <Brain className="w-5 h-5 mr-2" />
                  View AI Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Services</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive AI solutions tailored to your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <Card key={index} className="interactive-card group relative overflow-hidden">
                  {service.popular && (
                    <Badge className="absolute top-4 right-4 bg-gradient-primary text-white">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-lg font-semibold text-primary mb-4">{service.pricing}</div>
                    <Button className="w-full" variant={service.popular ? "default" : "outline"}>
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Technologies We Use</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Leveraging cutting-edge AI frameworks and platforms
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <Card key={index} className="text-center hover-lift group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                      {tech.logo}
                    </div>
                    <h3 className="font-semibold">{tech.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Use Cases</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real-world applications of AI across different industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="interactive-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        {useCase.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                        <p className="text-muted-foreground">{useCase.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let our AI experts help you identify opportunities and implement solutions 
              that drive real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Bot className="w-5 h-5 mr-2" />
                Schedule AI Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Brain className="w-5 h-5 mr-2" />
                View Case Studies
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIServices;