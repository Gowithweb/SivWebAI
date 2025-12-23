import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Server,
  Cloud,
  Mail,
  Shield,
  Database,
  Settings,
  Zap,
  HardDrive,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Domain Registration",
      description: "AI domains (.ai, .in, .com) with free WHOIS protection",
      features: ["Free domain with hosting", "Multiple extensions", "Easy management"],
      popular: false,
    },
    {
      icon: Server,
      title: "Shared Web Hosting",
      description: "High-performance WordPress hosting with free SSL",
      features: ["3 months free", "Free migration", "24/7 monitoring"],
      popular: true,
    },
    {
      icon: Cloud,
      title: "VPS Hosting",
      description: "Secure VPS hosting for developers & businesses",
      features: ["Linux & Windows VPS", "Root access", "High availability"],
      popular: false,
    },
    {
      icon: HardDrive,
      title: "Dedicated Servers",
      description: "Enterprise-grade Linux & Windows servers",
      features: ["Full control", "Custom configs", "High performance"],
      popular: false,
    },
    {
      icon: Mail,
      title: "Email Hosting",
      description: "Professional business email with spam protection",
      features: ["Custom domain email", "G-Suite ready", "Secure access"],
      popular: false,
    },
    {
      icon: Shield,
      title: "SSL Certificates",
      description: "Free & premium SSL for maximum website security",
      features: ["Free SSL", "Wildcard SSL", "EV certificates"],
      popular: false,
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Managed database clusters for scale & reliability",
      features: ["MySQL", "PostgreSQL", "MongoDB"],
      popular: false,
    },
    {
      icon: Settings,
      title: "Kubernetes Hosting",
      description: "Scalable Kubernetes hosting for modern apps",
      features: ["Auto-scaling", "Load balancing", "CI/CD ready"],
      popular: false,
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-foreground via-primary-dark to-foreground"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/25 rounded-full blur-3xl animate-float delay-1000" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent-bright/20 rounded-full blur-3xl animate-pulse-slow" />

      <div className="relative z-10 container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Complete
            <span className="block bg-gradient-to-r from-primary via-accent-cyan to-secondary bg-clip-text text-transparent">
              Web Solutions
            </span>
          </h2>
          <p className="text-xl text-white/80">
            From domain registration to enterprise hosting and Kubernetes —
            everything you need to build, launch, and scale online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl hover:scale-105 transition-all ${
                service.popular ? "ring-2 ring-secondary" : ""
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-secondary to-accent-bright text-black text-xs px-4 py-1 rounded-full font-bold shadow-lg">
                  Most Popular
                </div>
              )}

              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent-cyan rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-white/70">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-white/80"
                    >
                      <Zap className="w-4 h-4 text-secondary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full font-bold ${
                    service.popular
                      ? "bg-gradient-to-r from-accent-bright via-warning to-accent-bright text-white"
                      : "bg-white/10 text-white border border-white/30 hover:bg-white hover:text-foreground"
                  }`}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 text-center">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl">
            <h3 className="text-3xl font-black text-white mb-4">
              One Partner. All Web Solutions.
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              WordPress, Laravel, Node.js, reseller hosting, ecommerce hosting,
              enterprise infrastructure, and more.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "WordPress Hosting",
                "Reseller Hosting",
                "E-commerce Hosting",
                "Enterprise Solutions",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
