import { Helmet } from 'react-helmet-async';
import { Wrench, Zap, Globe, Shield, Search, Database, Monitor, Smartphone, Wifi, Server, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

const Tools = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const tools = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Website Speed Test",
      description: "Analyze your website's loading speed and get optimization recommendations",
      category: "performance",
      features: ["Core Web Vitals", "Performance Score", "Optimization Tips", "Mobile Analysis"],
      url: "/tools/speed-test",
      popular: true
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Checker",
      description: "Comprehensive SEO analysis and recommendations for better rankings",
      category: "seo",
      features: ["Meta Tags Analysis", "Keyword Density", "Mobile-Friendly Test", "Schema Markup"],
      url: "/tools/seo-checker"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "SSL Certificate Checker",
      description: "Verify SSL certificate status and security configuration",
      category: "security",
      features: ["Certificate Validation", "Expiry Date", "Chain Analysis", "Security Rating"],
      url: "/tools/ssl-checker"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "DNS Lookup Tool",
      description: "Perform DNS queries and analyze domain name system records",
      category: "network",
      features: ["A Records", "MX Records", "CNAME Records", "TXT Records"],
      url: "/tools/dns-lookup"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "IP Address Checker",
      description: "Get detailed information about any IP address location and ISP",
      category: "network",
      features: ["Geolocation", "ISP Information", "Threat Analysis", "WHOIS Data"],
      url: "/tools/ip-checker",
      popular: true
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Website Uptime Monitor",
      description: "Monitor your website's availability and get instant alerts",
      category: "monitoring",
      features: ["24/7 Monitoring", "Email Alerts", "Response Time", "Uptime Reports"],
      url: "/tools/uptime-monitor"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-Friendly Test",
      description: "Check if your website is optimized for mobile devices",
      category: "mobile",
      features: ["Mobile Usability", "Viewport Analysis", "Touch Elements", "Loading Speed"],
      url: "/tools/mobile-test"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Port Scanner",
      description: "Scan open ports and check network security",
      category: "security",
      features: ["Common Ports", "Service Detection", "Security Assessment", "Vulnerability Check"],
      url: "/tools/port-scanner"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Link Checker",
      description: "Find and fix broken links on your website",
      category: "seo",
      features: ["Broken Links", "Redirect Chains", "Response Codes", "Link Analysis"],
      url: "/tools/link-checker"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tools' },
    { id: 'performance', name: 'Performance' },
    { id: 'seo', name: 'SEO' },
    { id: 'security', name: 'Security' },
    { id: 'network', name: 'Network' },
    { id: 'monitoring', name: 'Monitoring' },
    { id: 'mobile', name: 'Mobile' }
  ];

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const techStack = [
    { name: "AWS", logo: "☁️", category: "Cloud" },
    { name: "Azure", logo: "🌐", category: "Cloud" },
    { name: "Google Cloud", logo: "🔍", category: "Cloud" },
    { name: "Docker", logo: "🐳", category: "DevOps" },
    { name: "Kubernetes", logo: "☸️", category: "DevOps" },
    { name: "Linux", logo: "🐧", category: "OS" },
    { name: "Ubuntu", logo: "🟠", category: "OS" },
    { name: "Kali Linux", logo: "🛡️", category: "Security" },
    { name: "MySQL", logo: "🗄️", category: "Database" },
    { name: "PostgreSQL", logo: "🐘", category: "Database" },
    { name: "PHP", logo: "🐘", category: "Backend" },
    { name: "Node.js", logo: "🟢", category: "Backend" },
    { name: "React", logo: "⚛️", category: "Frontend" },
    { name: "Vue.js", logo: "💚", category: "Frontend" },
    { name: "A2 Hosting", logo: "🚀", category: "Hosting" },
    { name: "HostGator", logo: "🐊", category: "Hosting" },
    { name: "GoDaddy", logo: "🏁", category: "Domain" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent-bright/5">
      <Helmet>
        <title>Free Web Tools | Website Analysis & Testing Tools - GOwithWeb</title>
        <meta name="description" content="Free web tools for website analysis, SEO checking, speed testing, SSL verification, and more. Professional tools for developers and marketers." />
        <meta name="keywords" content="free web tools, website speed test, SEO checker, SSL checker, DNS lookup, IP checker, website tools" />
        <link rel="canonical" href="https://gowithweb.com/tools" />
        
        <meta property="og:title" content="Free Web Tools | Website Analysis & Testing Tools - GOwithWeb" />
        <meta property="og:description" content="Free web tools for website analysis, SEO checking, speed testing, SSL verification, and more. Professional tools for developers and marketers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gowithweb.com/tools" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Web Tools | Website Analysis & Testing Tools - GOwithWeb" />
        <meta name="twitter:description" content="Free web tools for website analysis, SEO checking, speed testing, SSL verification, and more. Professional tools for developers and marketers." />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center items-center space-x-2 mb-6">
                <Wrench className="w-12 h-12 text-primary animate-pulse" />
                <h1 className="text-4xl md:text-6xl font-bold gradient-text">
                  Free Web Tools
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Professional-grade tools for website analysis, optimization, and monitoring. 
                All free to use with detailed reports and actionable insights.
              </p>
              <Button size="lg" className="btn-hero">
                <Zap className="w-5 h-5 mr-2" />
                Explore All Tools
              </Button>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <Input
                    placeholder="Search tools..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="h-12"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTools.map((tool, index) => (
                <Card key={index} className="interactive-card group relative overflow-hidden">
                  {tool.popular && (
                    <Badge className="absolute top-4 right-4 bg-gradient-primary text-white">
                      Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                      {tool.icon}
                    </div>
                    <CardTitle className="text-xl">{tool.title}</CardTitle>
                    <CardDescription className="text-base">{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">
                      Use Tool
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Support</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our tools work with all major platforms and technologies
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {techStack.map((tech, index) => (
                <Card key={index} className="text-center hover-lift group cursor-pointer">
                  <CardContent className="p-4">
                    <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                      {tech.logo}
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{tech.name}</h3>
                    <Badge variant="outline" className="text-xs">
                      {tech.category}
                    </Badge>
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
              Need Custom Tools?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              We can develop custom tools and integrations tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Wrench className="w-5 h-5 mr-2" />
                Request Custom Tool
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Database className="w-5 h-5 mr-2" />
                API Documentation
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tools;