import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "E-commerce Store Owner",
      company: "Fashion Hub India",
      rating: 5,
      content: "GOwithWeb's WordPress hosting is incredible! The free migration was seamless and their 24/7 support helped me set up my online store. Sales increased by 40% due to faster loading times.",
      avatar: "PS"
    },
    {
      name: "Rahul Verma", 
      role: "Digital Marketing Agency",
      company: "WebTech Solutions",
      rating: 5,
      content: "We manage 50+ client websites on GOwithWeb's reseller hosting. The unlimited bandwidth and free SSL certificates have saved us thousands. Best web hosting India provider!",
      avatar: "RV"
    },
    {
      name: "Anjali Patel",
      role: "Startup Founder",
      company: "TechStart Innovations",
      rating: 5,
      content: "The VPS hosting with free website setup was perfect for our Laravel application. Great performance, security, and the 3 months free hosting gave us time to focus on growth.",
      avatar: "AP"
    },
    {
      name: "Vikram Singh",
      role: "Blogger & Content Creator", 
      company: "Travel Stories Blog",
      rating: 5,
      content: "Switched from expensive hosting to GOwithWeb. The free domain registration and cheap hosting with free SSL exceeded expectations. My blog loads 3x faster now!",
      avatar: "VS"
    },
    {
      name: "Meera Joshi",
      role: "Small Business Owner",
      company: "Artisan Crafts Co.",
      rating: 5,
      content: "Their ecommerce hosting with SSL is perfect for my handicraft business. The secure email hosting and G-Suite integration made professional communication easy.",
      avatar: "MJ"
    },
    {
      name: "Arjun Reddy",
      role: "Web Developer",
      company: "Code Solutions",
      rating: 5,
      content: "Best cloud hosting for developers! The Kubernetes hosting and dedicated Linux servers handle our enterprise applications perfectly. Excellent uptime and support.",
      avatar: "AR"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust GOwithWeb for their web hosting needs. Real reviews from real businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift shadow-custom bg-gradient-card border-0 relative overflow-hidden">
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-custom">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Trusted by 50,000+ Websites Across India
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
                <div className="text-muted-foreground">Customer Rating</div>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">2,500+</div>
                <div className="text-muted-foreground">5-Star Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">98%</div>
                <div className="text-muted-foreground">Customer Retention</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;