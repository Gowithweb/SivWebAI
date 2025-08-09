import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Search, TrendingUp, Target, BarChart3, Globe, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const SEO = () => {
  const seoServices = [
    {
      icon: Search,
      title: "Keyword Research & Strategy",
      description: "Comprehensive keyword analysis to target the right terms for your business.",
      features: ["Competitor Analysis", "Search Volume Research", "Long-tail Keywords", "Intent Mapping"],
      price: "Starting at $299/month"
    },
    {
      icon: TrendingUp,
      title: "On-Page Optimization",
      description: "Optimize your website's content and structure for better search rankings.",
      features: ["Meta Tags Optimization", "Content Optimization", "Internal Linking", "Schema Markup"],
      price: "Starting at $199/month"
    },
    {
      icon: Target,
      title: "Technical SEO",
      description: "Fix technical issues that prevent search engines from crawling your site.",
      features: ["Site Speed Optimization", "Mobile Optimization", "XML Sitemaps", "Crawl Error Fixes"],
      price: "Starting at $399/month"
    },
    {
      icon: BarChart3,
      title: "Local SEO",
      description: "Dominate local search results and attract nearby customers.",
      features: ["Google My Business", "Local Citations", "Review Management", "Local Keywords"],
      price: "Starting at $249/month"
    }
  ];

  const seoProcess = [
    {
      title: "SEO Audit",
      description: "Comprehensive analysis of your website's current SEO performance and issues."
    },
    {
      title: "Strategy Development",
      description: "Create a custom SEO strategy based on your business goals and competition."
    },
    {
      title: "Implementation",
      description: "Execute on-page, technical, and content optimizations across your website."
    },
    {
      title: "Monitoring & Reporting",
      description: "Track rankings, traffic, and conversions with detailed monthly reports."
    }
  ];

  const seoMetrics = [
    { label: "Average Ranking Improvement", value: "245%", icon: TrendingUp },
    { label: "Organic Traffic Increase", value: "180%", icon: BarChart3 },
    { label: "Conversion Rate Boost", value: "95%", icon: Target },
    { label: "Client Satisfaction", value: "98%", icon: CheckCircle }
  ];

  return (
    <>
      <Helmet>
        <title>SEO Services - Boost Your Search Engine Rankings | GOwithWeb</title>
        <meta name="description" content="Professional SEO services to improve your website's search engine rankings. Keyword research, on-page optimization, technical SEO, and local SEO services." />
        <meta name="keywords" content="SEO services, search engine optimization, keyword research, on-page SEO, technical SEO, local SEO, Google rankings" />
        <link rel="canonical" href="https://gowithweb.com/seo-services" />
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
                    Dominate Search Results
                  </h1>
                  <p className="text-xl text-white/90 mb-8">
                    Get more organic traffic and higher search rankings with our proven SEO strategies. 
                    Increase your online visibility and grow your business with data-driven optimization.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" variant="secondary">
                      <Search className="w-5 h-5 mr-2" />
                      Get Free SEO Audit
                    </Button>
                    <Button size="lg" variant="outline">
                      View Case Studies
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                    alt="SEO Analytics Dashboard"
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* SEO Metrics */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Proven SEO Results</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Our data-driven approach delivers measurable improvements in search rankings and organic traffic
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {seoMetrics.map((metric, index) => (
                  <Card key={index} className="p-6 text-center hover-lift">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <metric.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
                    <p className="text-muted-foreground">{metric.label}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* SEO Services */}
          <section className="py-20 bg-gradient-subtle">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Our SEO Services</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive SEO solutions to improve your search engine visibility and drive organic growth
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {seoServices.map((service, index) => (
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
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-success mr-2" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full group">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* SEO Process */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Our SEO Process</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  A systematic approach to improve your search rankings and organic visibility
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {seoProcess.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SEO Tools */}
          <section className="py-20 bg-gradient-subtle">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-4xl font-bold text-foreground mb-6">Free SEO Tools</h2>
                    <p className="text-xl text-muted-foreground mb-8">
                      Use our professional SEO tools to analyze your website and identify optimization opportunities.
                    </p>
                    <div className="space-y-6">
                      {[
                        {
                          name: "SEO Audit Tool",
                          description: "Comprehensive analysis of your website's SEO performance"
                        },
                        {
                          name: "Keyword Research Tool",
                          description: "Find the best keywords for your business and content"
                        },
                        {
                          name: "Rank Tracker",
                          description: "Monitor your search engine rankings for target keywords"
                        },
                        {
                          name: "Competitor Analysis",
                          description: "Analyze your competitors' SEO strategies and performance"
                        }
                      ].map((tool, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-success mr-3 mt-1" />
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-1">{tool.name}</h3>
                            <p className="text-muted-foreground">{tool.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button size="lg" className="mt-8">
                      <Search className="w-5 h-5 mr-2" />
                      Try Free Tools
                    </Button>
                  </div>
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop"
                      alt="SEO Tools Dashboard"
                      className="rounded-xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-primary/10 rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SEO Pricing */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">SEO Packages</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Choose the perfect SEO package for your business needs and budget
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    name: "Starter SEO",
                    price: "$299",
                    period: "/month",
                    description: "Perfect for small businesses and new websites",
                    features: [
                      "Keyword Research (10 keywords)",
                      "On-Page Optimization",
                      "Technical SEO Audit",
                      "Monthly Reports",
                      "Email Support"
                    ],
                    popular: false
                  },
                  {
                    name: "Professional SEO",
                    price: "$599",
                    period: "/month",
                    description: "Ideal for growing businesses and competitive markets",
                    features: [
                      "Keyword Research (25 keywords)",
                      "Advanced On-Page SEO",
                      "Technical SEO Implementation",
                      "Content Optimization",
                      "Local SEO",
                      "Bi-weekly Reports",
                      "Priority Support"
                    ],
                    popular: true
                  },
                  {
                    name: "Enterprise SEO",
                    price: "$1,299",
                    period: "/month",
                    description: "Comprehensive SEO for large websites and enterprises",
                    features: [
                      "Unlimited Keywords",
                      "Full-Scale SEO Campaign",
                      "Custom Content Strategy",
                      "Advanced Technical SEO",
                      "Competitor Analysis",
                      "Weekly Reports",
                      "Dedicated Account Manager"
                    ],
                    popular: false
                  }
                ].map((plan, index) => (
                  <Card key={index} className={`p-8 relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                      <div className="flex items-baseline justify-center mb-2">
                        <span className="text-4xl font-bold text-primary">{plan.price}</span>
                        <span className="text-muted-foreground ml-1">{plan.period}</span>
                      </div>
                      <p className="text-muted-foreground">{plan.description}</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-success mr-3" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${plan.popular ? 'btn-hero' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      Get Started
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
                <h2 className="text-4xl font-bold text-white mb-4">Ready to Improve Your Rankings?</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Get a free SEO audit and discover how we can help you rank higher in search results.
                </p>
                <Button size="lg" variant="secondary">
                  <Zap className="w-5 h-5 mr-2" />
                  Get Free SEO Audit
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

export default SEO;