import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Wrench, Monitor, Search, Zap, Globe, Settings, CheckCircle, ArrowRight } from 'lucide-react';

const ToolsServices = () => {
  const tools = [
    {
      icon: Monitor,
      title: "Website Speed Test",
      description: "Analyze your website's loading speed and get optimization recommendations.",
      features: ["Page Load Analysis", "Performance Metrics", "Optimization Tips", "Mobile Speed Test"],
      action: "Test Now",
      category: "Performance"
    },
    {
      icon: Search,
      title: "SEO Analyzer",
      description: "Comprehensive SEO audit to improve your website's search engine ranking.",
      features: ["On-page SEO Check", "Keyword Analysis", "Meta Tags Review", "Competitor Analysis"],
      action: "Analyze SEO",
      category: "SEO"
    },
    {
      icon: Globe,
      title: "Domain Checker",
      description: "Check domain availability and get suggestions for your perfect domain name.",
      features: ["Availability Check", "Domain Suggestions", "Price Comparison", "Bulk Search"],
      action: "Check Domain",
      category: "Domains"
    },
    {
      icon: Settings,
      title: "SSL Certificate Checker",
      description: "Verify SSL certificate status and security configuration of any website.",
      features: ["Certificate Validation", "Expiry Alerts", "Security Analysis", "Chain Verification"],
      action: "Check SSL",
      category: "Security"
    },
    {
      icon: Zap,
      title: "Uptime Monitor",
      description: "24/7 website monitoring with instant alerts for downtime incidents.",
      features: ["Real-time Monitoring", "Instant Alerts", "Performance Reports", "Global Checks"],
      action: "Start Monitoring",
      category: "Monitoring"
    },
    {
      icon: Wrench,
      title: "Code Validator",
      description: "Validate HTML, CSS, and JavaScript code for errors and best practices.",
      features: ["HTML Validation", "CSS Checking", "JavaScript Lint", "Accessibility Check"],
      action: "Validate Code",
      category: "Development"
    }
  ];

  const categories = ["All", "Performance", "SEO", "Security", "Monitoring", "Development", "Domains"];

  return (
    <>
      <Helmet>
        <title>Free Web Tools & Services - Website Analysis & Optimization | GOwithWeb</title>
        <meta name="description" content="Free web tools for website analysis, SEO audits, speed tests, domain checking, SSL verification, and more. Professional tools to optimize your website performance." />
        <meta name="keywords" content="free web tools, website speed test, SEO analyzer, domain checker, SSL checker, uptime monitor, website tools" />
        <link rel="canonical" href="https://gowithweb.com/tools-services" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-hero">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Free Web Tools & Services
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Professional-grade tools to analyze, optimize, and monitor your website. 
                All tools are free to use and provide instant results.
              </p>
              <Button size="lg" variant="secondary">
                <Wrench className="w-5 h-5 mr-2" />
                Explore All Tools
              </Button>
            </div>
          </section>

          {/* Tools Categories */}
          <section className="py-12 bg-background/95 backdrop-blur-sm border-b border-border">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category, index) => (
                  <Button 
                    key={index}
                    variant={index === 0 ? "default" : "outline"}
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </section>

          {/* Tools Grid */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Professional Web Tools</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Everything you need to analyze, optimize, and maintain your website
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tools.map((tool, index) => (
                  <Card key={index} className="p-6 hover-lift">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                        <tool.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-xs text-primary font-semibold uppercase tracking-wide">{tool.category}</span>
                        <h3 className="text-xl font-bold text-foreground">{tool.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{tool.description}</p>
                    <ul className="space-y-2 mb-6">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-success mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full group">
                      {tool.action}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Tool Section */}
          <section className="py-20 bg-gradient-subtle">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Card className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-4">
                        <Monitor className="w-8 h-8 text-primary mr-3" />
                        <span className="text-sm text-primary font-semibold uppercase tracking-wide">Featured Tool</span>
                      </div>
                      <h2 className="text-3xl font-bold text-foreground mb-4">
                        Complete Website Audit
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        Get a comprehensive analysis of your website including SEO, performance, 
                        security, and accessibility in one detailed report.
                      </p>
                      <ul className="space-y-2 mb-6">
                        {[
                          "Full SEO Analysis",
                          "Performance Metrics",
                          "Security Scan",
                          "Accessibility Check",
                          "Mobile Optimization",
                          "Detailed Report"
                        ].map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-success mr-2" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button size="lg" className="group">
                        Start Free Audit
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop"
                        alt="Website Audit Tool"
                        className="rounded-xl shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-primary/20 rounded-xl"></div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* API Services */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">API Services</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Integrate our tools into your applications with our powerful APIs
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Website Analysis API",
                    description: "Programmatic access to our website analysis tools",
                    features: ["REST API", "JSON Response", "Rate Limiting", "Authentication"]
                  },
                  {
                    title: "SEO Data API",
                    description: "Real-time SEO metrics and recommendations",
                    features: ["SEO Scores", "Keyword Data", "Meta Analysis", "Competitor Info"]
                  },
                  {
                    title: "Performance API",
                    description: "Website speed and performance monitoring",
                    features: ["Speed Metrics", "Core Web Vitals", "Global Testing", "Historical Data"]
                  }
                ].map((api, index) => (
                  <Card key={index} className="p-6 text-center hover-lift">
                    <h3 className="text-xl font-bold text-foreground mb-3">{api.title}</h3>
                    <p className="text-muted-foreground mb-4">{api.description}</p>
                    <ul className="space-y-1 text-sm text-muted-foreground mb-6">
                      {api.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full">
                      View Documentation
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <div className="bg-gradient-primary p-12 rounded-2xl">
                <h2 className="text-4xl font-bold text-white mb-4">Need Custom Tools?</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  We can develop custom web tools and services tailored to your specific business needs.
                </p>
                <Button size="lg" variant="secondary">
                  <Settings className="w-5 h-5 mr-2" />
                  Request Custom Tool
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

export default ToolsServices;