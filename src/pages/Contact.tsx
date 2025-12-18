import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import contactHero from '@/assets/contact-hero.jpg';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Support",
      details: "+15551535471",
      description: "Available 24/7 for urgent support",
      action: "tel:+15551535471"
    },
    {
      icon: Mail,
      title: "Email Support",
      details: "support@sivwebai.com",
      description: "Get response within 2 hours",
      action: "mailto:support@sivwebai.com"
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: "Bengaluru, Karnataka, India",
      description: "Visit our office for in-person meetings",
      action: "#"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "24/7 Support Available",
      description: "We're here when you need us",
      action: "#"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Free Consultation & 24/7 Support | SivWebAI</title>
        <meta name="description" content="Contact SivWebAI for expert web solutions consultation. Free strategy sessions, 24/7 support, custom quotes, and dedicated project management. Start your digital transformation today." />
        <meta name="keywords" content="contact SivWebAI, web services consultation, free quote, web development support, hosting support, 24/7 support, digital strategy, project consultation" />
        <link rel="canonical" href="https://sivwebai.com/contact" />
        <meta property="og:title" content="Contact SivWebAI - Free Consultation & Expert Support" />
        <meta property="og:description" content="Get expert consultation for your web projects. Free strategy sessions and 24/7 support available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sivwebai.com/contact" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    Get in Touch
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    Ready to start your project or need support? We're here to help 24/7. 
                    Contact us for a free consultation and let's bring your ideas to life.
                  </p>
                  <Button size="lg">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Start Live Chat
                  </Button>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative">
                    <img 
                      src={contactHero} 
                      alt="Contact Support Team" 
                      className="rounded-2xl shadow-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
                    <div className="absolute -top-4 -left-4 w-32 h-32 bg-success/20 rounded-full blur-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Contact Information</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Multiple ways to reach us - choose what works best for you
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 text-center hover-lift cursor-pointer" onClick={() => window.open(info.action, '_blank')}>
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{info.title}</h3>
                    <p className="text-primary font-semibold mb-2">{info.details}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="py-20 bg-gradient-subtle">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Form */}
                  <Card className="p-8">
                    <h2 className="text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                          <Input placeholder="John" required />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                          <Input placeholder="Doe" required />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                        <Input type="email" placeholder="john@example.com" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                        <Input type="tel" placeholder="+91 9876543210" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Service Interested In</label>
                        <select className="w-full p-3 border border-border rounded-lg bg-background">
                          <option>Web Development</option>
                          <option>Web Hosting</option>
                          <option>Digital Marketing</option>
                          <option>SEO Services</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                        <Textarea 
                          placeholder="Tell us about your project or how we can help you..."
                          rows={6}
                          required
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </Card>

                  {/* Additional Information */}
                  <div className="space-y-8">
                    <Card className="p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Us?</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          <span>24/7 Customer Support</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          <span>Free Consultation</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          <span>Quick Response Time</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          <span>Expert Technical Team</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          <span>Competitive Pricing</span>
                        </li>
                      </ul>
                    </Card>

                    <Card className="p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-4">Emergency Support</h3>
                      <p className="text-muted-foreground mb-4">
                        Having a critical issue? Our emergency support team is available 24/7 
                        to help resolve urgent problems immediately.
                      </p>
                      <Button variant="destructive" className="w-full">
                        <Phone className="w-5 h-5 mr-2" />
                        Call Emergency Support
                      </Button>
                    </Card>

                    <Card className="p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-4">Request a Quote</h3>
                      <p className="text-muted-foreground mb-4">
                        Need a detailed quote for your project? Fill out our quick form 
                        and get a custom proposal within 24 hours.
                      </p>
                      <Button variant="outline" className="w-full">
                        Get Custom Quote
                      </Button>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Quick answers to common questions about our services
                </p>
              </div>

              <div className="max-w-3xl mx-auto space-y-6">
                {[
                  {
                    question: "How quickly can you start my project?",
                    answer: "We can typically start new projects within 1-2 business days after initial consultation and project approval."
                  },
                  {
                    question: "Do you provide ongoing support after project completion?",
                    answer: "Yes, we offer comprehensive maintenance and support packages to keep your website running smoothly."
                  },
                  {
                    question: "What is your typical project timeline?",
                    answer: "Project timelines vary based on complexity, but most websites are completed within 2-6 weeks."
                  },
                  {
                    question: "Do you offer hosting services?",
                    answer: "Yes, we provide reliable web hosting with 99.9% uptime guarantee and 24/7 monitoring."
                  }
                ].map((faq, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;