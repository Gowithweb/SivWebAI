import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Gift, 
  Shield, 
  Clock, 
  Zap, 
  Headphones, 
  RefreshCw,
  CheckCircle,
  TrendingUp,
  Monitor,
  Lock,
  Globe,
  Database
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Gift,
      title: "3 Months Free Hosting",
      description: "Get started with 3 months of premium web hosting absolutely free",
      highlight: "₹0 for 3 months"
    },
    {
      icon: Globe,
      title: "Free Domain & Setup",
      description: "Free domain registration and complete website setup services",
      highlight: "Save ₹2000+"
    },
    {
      icon: Shield,
      title: "Free SSL & Security",
      description: "Cheap hosting with free SSL, malware protection, and daily backups",
      highlight: "Bank-grade security"
    },
    {
      icon: Clock,
      title: "24/7 Monitoring & Support",
      description: "Fast & secure website hosting with round-the-clock monitoring",
      highlight: "99.9% uptime SLA"
    },
    {
      icon: RefreshCw,
      title: "Free Website Migration",
      description: "Free website migration India with zero downtime guarantee",
      highlight: "Expert migration team"
    },
    {
      icon: Zap,
      title: "Unlimited Hosting",
      description: "Unlimited bandwidth hosting with high-speed SSD storage",
      highlight: "No limits"
    }
  ];

  const additionalFeatures = [
    "cPanel control panel included",
    "One-click WordPress installation", 
    "Daily automated backups",
    "Acronis backup solutions",
    "DDoS protection included",
    "PHP 8.x support",
    "MySQL database hosting",
    "Email accounts included",
    "CDN integration",
    "99.9% uptime guarantee",
    "30-day money-back guarantee",
    "Softaculous app installer"
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose GOwithWeb?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Premium hosting for businesses with industry-leading features, unmatched support, and incredible value for money.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover-lift shadow-custom bg-gradient-card border-0 text-center">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-primary">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{feature.title}</CardTitle>
                <div className="bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium inline-block">
                  {feature.highlight}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-gradient-card rounded-2xl p-8 shadow-custom">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Everything You Need to Succeed Online
            </h3>
            <p className="text-lg text-muted-foreground">
              Cloud hosting for developers with enterprise-grade features and tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button className="btn-hero text-lg px-8 py-4">
              Start Your Free Trial
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • Setup in minutes • 30-day guarantee
            </p>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">50K+</div>
            <div className="text-muted-foreground">Websites Hosted</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-success mb-2">24/7</div>
            <div className="text-muted-foreground">Expert Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">30-Day</div>
            <div className="text-muted-foreground">Money Back</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;