import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "E-commerce Store Owner",
      company: "Fashion Hub India",
      rating: 5,
      content:
        "SivWebAI's WordPress hosting is incredible! The free migration was seamless and our website speed improved dramatically.",
      avatar: "PS",
    },
    {
      name: "Rahul Verma",
      role: "Digital Marketing Agency",
      company: "WebTech Solutions",
      rating: 5,
      content:
        "We manage 50+ client websites on SivWebAI reseller hosting. Performance, uptime, and support are outstanding.",
      avatar: "RV",
    },
    {
      name: "Anjali Patel",
      role: "Startup Founder",
      company: "TechStart Innovations",
      rating: 5,
      content:
        "Their VPS hosting helped us scale our Laravel app smoothly. Secure, fast, and highly reliable.",
      avatar: "AP",
    },
    {
      name: "Vikram Singh",
      role: "Blogger",
      company: "Travel Stories",
      rating: 5,
      content:
        "Free domain, SSL, and excellent support. My blog loads 3x faster now!",
      avatar: "VS",
    },
    {
      name: "Meera Joshi",
      role: "Business Owner",
      company: "Artisan Crafts",
      rating: 5,
      content:
        "Secure email hosting and ecommerce solutions helped my business grow online.",
      avatar: "MJ",
    },
    {
      name: "Arjun Reddy",
      role: "Web Developer",
      company: "Code Solutions",
      rating: 5,
      content:
        "Best hosting for developers. Kubernetes and dedicated servers are rock solid.",
      avatar: "AR",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-foreground via-primary-dark to-foreground"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/25 rounded-full blur-3xl animate-float delay-1000" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent-bright/20 rounded-full blur-3xl animate-pulse-slow" />

      <div className="relative z-10 container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Trusted by
            <span className="block bg-gradient-to-r from-primary via-accent-cyan to-secondary bg-clip-text text-transparent">
              Thousands of Businesses
            </span>
          </h2>
          <p className="text-xl text-white/80">
            Real stories from real customers who trust SivWebAI for hosting,
            domains, and complete web solutions.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <div className="flex justify-end gap-3 mb-8">
            <CarouselPrevious className="static bg-white/10 border border-white/20 text-white hover:bg-white hover:text-foreground" />
            <CarouselNext className="static bg-white/10 border border-white/20 text-white hover:bg-white hover:text-foreground" />
          </div>

          <CarouselContent>
            {testimonials.map((t, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl hover:scale-105 transition-all">
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-white/20" />

                  <CardContent className="p-8 flex flex-col h-full">
                    {/* Stars */}
                    <div className="flex mb-4">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-secondary text-secondary"
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-white/85 leading-relaxed mb-6 flex-grow">
                      “{t.content}”
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-cyan rounded-full flex items-center justify-center font-bold text-white">
                        {t.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{t.name}</div>
                        <div className="text-sm text-white/60">{t.role}</div>
                        <div className="text-sm text-secondary font-medium">
                          {t.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Trust Stats */}
        <div className="mt-20">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 text-center shadow-2xl">
            <h3 className="text-3xl font-black text-white mb-6">
              Trusted by 50,000+ Websites
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-black text-secondary mb-2">
                  4.9/5
                </div>
                <p className="text-white/70">Average Rating</p>
              </div>
              <div>
                <div className="text-4xl font-black text-accent-bright mb-2">
                  2,500+
                </div>
                <p className="text-white/70">5-Star Reviews</p>
              </div>
              <div>
                <div className="text-4xl font-black text-success mb-2">
                  98%
                </div>
                <p className="text-white/70">Customer Retention</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
