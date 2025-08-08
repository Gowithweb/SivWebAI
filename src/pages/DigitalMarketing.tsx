import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Megaphone, Target, TrendingUp, Users, Mail, Share2, CheckCircle, ArrowRight, Zap } from 'lucide-react';

const DigitalMarketing = () => {
  const marketingServices = [
    {
      icon: Target,
      title: "Pay-Per-Click (PPC) Advertising",
      description: "Drive immediate traffic and conversions with targeted Google Ads and social media campaigns.",
      features: ["Google Ads Management", "Facebook & Instagram Ads", "Keyword Research", "A/B Testing"],
      results: "Average 300% ROI",
      price: "Starting at $499/month"
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Build brand awareness and engage with your audience across all major social platforms.",
      features: ["Content Creation", "Community Management", "Influencer Marketing", "Social Advertising"],
      results: "150% Engagement Increase",
      price: "Starting at $399/month"
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Nurture leads and drive sales with personalized email campaigns and automation.",
      features: ["Email Campaigns", "Marketing Automation", "List Building", "Performance Analytics"],
      results: "4,200% Average ROI",
      price: "Starting at $299/month"
    },
    {
      icon: TrendingUp,
      title: "Content Marketing",
      description: "Attract and convert prospects with valuable, SEO-optimized content that drives results.",
      features: ["Blog Writing", "Video Content", "Infographics", "Content Strategy"],
      results: "3x More Leads",
      price: "Starting at $599/month"
    }
  ];

  const marketingStats = [
    { label: "Average ROI Increase", value: "280%", icon: TrendingUp },
    { label: "Lead Generation Boost", value: "350%", icon: Target },
    { label: "Brand Awareness Growth", value: "200%", icon: Megaphone },
    { label: "Customer Retention", value: "90%", icon: Users }
  ];

  const platforms = [
    { name: "Google Ads", logo: "https://www.google.com/favicon.ico" },
    { name: "Facebook", logo: "https://www.facebook.com/favicon.ico" },
    { name: "Instagram", logo: "https://www.instagram.com/favicon.ico" },
    { name: "LinkedIn", logo: "https://www.linkedin.com/favicon.ico" },
    { name: "Twitter", logo: "https://www.twitter.com/favicon.ico" },
    { name: "TikTok", logo: "https://www.tiktok.com/favicon.ico" }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Marketing Services - Grow Your Business Online | GOwithWeb</title>
        <meta name="description" content="Comprehensive digital marketing services including PPC advertising, social media marketing, email marketing, and content marketing. Drive more traffic and conversions." />
        <meta name="keywords" content="digital marketing, PPC advertising, social media marketing, email marketing, content marketing, Google Ads, Facebook Ads" />
        <link rel="canonical" href="https://gowithweb.com/digital-marketing" />
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
                    Grow Your Business with Digital Marketing
                  </h1>
                  <p className="text-xl text-white/90 mb-8">
                    Reach more customers, increase sales, and build your brand with our data-driven digital marketing strategies. 
                    From PPC to social media, we've got you covered.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" variant="secondary">
                      <Megaphone className="w-5 h-5 mr-2" />
                      Start Your Campaign
                    </Button>
                    <Button size="lg" variant="outline-hero">
                      Get Free Strategy Call
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
                    alt="Digital Marketing Analytics"
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Marketing Stats */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Proven Marketing Results</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Our data-driven approach delivers measurable results for businesses of all sizes
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {marketingStats.map((stat, index) => (
                  <Card key={index} className="p-6 text-center hover-lift">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Marketing Services */}
          <section className="py-20 bg-gradient-subtle">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Our Marketing Services</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive digital marketing solutions to drive growth and maximize your online presence
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {marketingServices.map((service, index) => (
                  <Card key={index} className="p-8 hover-lift">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-primary font-semibold">{service.price}</span>
                          <span className="text-success font-semibold">{service.results}</span>
                        </div>
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

          {/* Platforms We Work With */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Platforms We Master</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  We're certified experts on all major digital marketing platforms
                </p>
              </div>

              <div className="grid md:grid-cols-6 gap-8">
                {platforms.map((platform, index) => (
                  <Card key={index} className="p-6 text-center hover-lift">
                    <div className="w-16 h-16 bg-gradient-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">{platform.name[0]}</span>
                    </div>
                    <h3 className="font-semibold text-foreground">{platform.name}</h3>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Marketing Process */}
          <section className="py-20 bg-gradient-subtle">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Our Marketing Process</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  A systematic approach to creating and executing successful digital marketing campaigns
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    step: "1",
                    title: "Strategy & Research",
                    description: "Analyze your market, competitors, and audience to create a winning strategy."
                  },
                  {
                    step: "2",
                    title: "Campaign Creation",
                    description: "Design and build targeted campaigns across multiple channels and platforms."
                  },
                  {
                    step: "3",
                    title: "Launch & Optimize",
                    description: "Launch campaigns and continuously optimize for better performance and ROI."
                  },
                  {
                    step: "4",
                    title: "Report & Scale",
                    description: "Provide detailed reports and scale successful campaigns for maximum growth."
                  }
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Case Studies */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Success Stories</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  See how we've helped businesses achieve remarkable growth through digital marketing
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "E-commerce Growth",
                    industry: "Online Retail",
                    result: "450% Revenue Increase",
                    description: "Increased online sales through strategic PPC campaigns and social media marketing.",
                    metrics: ["300% More Traffic", "180% Better Conversion", "ROI of 520%"]
                  },
                  {
                    title: "Local Business Expansion",
                    industry: "Restaurant Chain",
                    result: "200% More Customers",
                    description: "Expanded local reach through targeted social media and email marketing campaigns.",
                    metrics: ["150% Lead Growth", "90% Customer Retention", "ROI of 380%"]
                  },
                  {
                    title: "B2B Lead Generation",
                    industry: "Software Company",
                    result: "500% Lead Increase",
                    description: "Generated high-quality B2B leads through content marketing and LinkedIn advertising.",
                    metrics: ["400% Web Traffic", "250% Email Signups", "ROI of 600%"]
                  }
                ].map((study, index) => (
                  <Card key={index} className="p-6 hover-lift">
                    <div className="text-sm text-primary font-semibold mb-2">{study.industry}</div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{study.title}</h3>
                    <div className="text-2xl font-bold text-success mb-4">{study.result}</div>
                    <p className="text-muted-foreground mb-4">{study.description}</p>
                    <ul className="space-y-1 text-sm">
                      {study.metrics.map((metric, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-success mr-2" />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Marketing Packages */}
          <section className="py-20 bg-gradient-subtle">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Marketing Packages</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Choose the perfect digital marketing package for your business goals and budget
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    name: "Starter Package",
                    price: "$899",
                    period: "/month",
                    description: "Perfect for small businesses getting started with digital marketing",
                    features: [
                      "Google Ads Management",
                      "Facebook & Instagram Ads",
                      "Basic SEO",
                      "Email Marketing Setup",
                      "Monthly Reports"
                    ],
                    popular: false
                  },
                  {
                    name: "Growth Package",
                    price: "$1,799",
                    period: "/month",
                    description: "Comprehensive marketing for growing businesses",
                    features: [
                      "Multi-Platform PPC",
                      "Advanced Social Media",
                      "Content Marketing",
                      "Email Automation",
                      "Conversion Optimization",
                      "Bi-weekly Reports",
                      "Dedicated Manager"
                    ],
                    popular: true
                  },
                  {
                    name: "Enterprise Package",
                    price: "$3,499",
                    period: "/month",
                    description: "Full-scale marketing for large businesses and enterprises",
                    features: [
                      "Complete Marketing Suite",
                      "Advanced Analytics",
                      "Custom Strategy",
                      "Priority Support",
                      "Weekly Strategy Calls",
                      "Real-time Reporting",
                      "Dedicated Team"
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
                <h2 className="text-4xl font-bold text-white mb-4">Ready to Accelerate Your Growth?</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Get a free marketing strategy consultation and discover how we can help you reach more customers.
                </p>
                <Button size="lg" variant="secondary">
                  <Zap className="w-5 h-5 mr-2" />
                  Get Free Strategy Call
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

export default DigitalMarketing;