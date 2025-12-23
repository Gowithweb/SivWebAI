import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  Rocket,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const WebDevelopmentSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Code,
      title: "React Development",
      desc: "Modern, scalable React applications",
      price: "From ₹25,000",
    },
    {
      icon: Rocket,
      title: "Next.js Development",
      desc: "SSR, SSG & full-stack Next.js apps",
      price: "From ₹35,000",
      popular: true,
    },
    {
      icon: Globe,
      title: "WordPress Development",
      desc: "Custom themes & WooCommerce",
      price: "From ₹15,000",
      popular: true,
    },
    {
      icon: Layers,
      title: "Drupal Development",
      desc: "Enterprise Drupal solutions",
      price: "From ₹30,000",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      desc: "Online stores with payment gateway",
      price: "From ₹40,000",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Web Apps",
      desc: "Responsive & PWA ready",
      price: "From ₹20,000",
    },
    {
      icon: Palette,
      title: "UI / UX Design",
      desc: "Designs that convert",
      price: "From ₹12,000",
    },
    {
      icon: Database,
      title: "Full-Stack Development",
      desc: "Backend APIs & databases",
      price: "From ₹50,000",
    },
  ];

  const handleQuote = (service: string) => {
    const msg = encodeURIComponent(
      `Hi SivWebAI Team,\n\nI am interested in ${service}.\nPlease share timeline, pricing, and next steps.\n\nThanks`
    );
    navigate(`/contact?service=web-development&message=${msg}`);
  };

  return (
    <section
      id="web-development"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-foreground via-primary-dark to-foreground"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/20 blur-3xl rounded-full animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/25 blur-3xl rounded-full animate-float delay-1000" />

      <div className="relative z-10 container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-2 mb-6">
            <Code className="w-6 h-6 text-secondary" />
            <span className="text-white font-semibold">Web Development</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Modern
            <span className="block bg-gradient-to-r from-primary via-accent-cyan to-secondary bg-clip-text text-transparent">
              Web Development
            </span>
          </h2>

          <p className="text-xl text-white/80">
            React, Next.js, WordPress, Drupal & full-stack development —
            fast, secure, and SEO-optimized.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((s, i) => (
            <Card
              key={i}
              className={`relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl hover:scale-105 transition ${
                s.popular ? "ring-2 ring-secondary" : ""
              }`}
            >
              {s.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-secondary to-accent-bright text-black px-4 py-1 rounded-full text-xs font-bold">
                  <Star size={12} className="inline mr-1" /> Popular
                </div>
              )}

              <CardHeader className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent-cyan rounded-xl flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-white">{s.title}</CardTitle>
                <CardDescription className="text-white/70">
                  {s.desc}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center">
                <p className="text-secondary font-bold text-lg mb-4">
                  {s.price}
                </p>

                <Button
                  onClick={() => handleQuote(s.title)}
                  className="w-full font-bold bg-white/10 text-white border border-white/30 hover:bg-white hover:text-foreground"
                >
                  Get Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-white">
              Our Development Process
            </h3>

            {[
              "Discovery & Planning",
              "Design & Prototyping",
              "Development & Testing",
              "Launch & Ongoing Support",
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                  {i + 1}
                </div>
                <p className="text-white/80">{step}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 text-center">
            <h4 className="text-2xl font-black text-white mb-4">
              Ready to Start Your Project?
            </h4>
            <p className="text-white/80 mb-6">
              Get expert consultation, clear timelines, and transparent pricing.
            </p>
            <Button
              onClick={() => handleQuote("Web Development Project")}
              className="bg-gradient-to-r from-accent-bright via-warning to-accent-bright text-white font-black"
              size="lg"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WebDevelopmentSection;
