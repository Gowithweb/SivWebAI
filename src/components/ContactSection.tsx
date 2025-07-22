import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Headphones,
  Globe
} from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent Successfully!",
      description: "Our team will contact you within 30 minutes during business hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 9876543210",
      description: "24/7 Technical Support"
    },
    {
      icon: Mail,
      title: "Email Us", 
      content: "support@gowithweb.com",
      description: "Quick Response Guaranteed"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Mumbai, India",
      description: "Data Centers Nationwide"
    },
    {
      icon: Clock,
      title: "Support Hours",
      content: "24/7 Available",
      description: "Round-the-clock assistance"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Started Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to experience the best web hosting India has to offer? Contact our experts for personalized hosting solutions and free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-custom bg-gradient-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                <MessageSquare className="w-6 h-6 mr-2 text-primary" />
                Send us a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 30 minutes during business hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="border-border focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="border-border focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                      className="border-border focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-border rounded-md focus:ring-primary focus:border-primary bg-background"
                    >
                      <option value="">Select a service</option>
                      <option value="shared-hosting">Shared Web Hosting</option>
                      <option value="wordpress-hosting">WordPress Hosting</option>
                      <option value="vps-hosting">VPS Hosting</option>
                      <option value="dedicated-servers">Dedicated Servers</option>
                      <option value="domain-registration">Domain Registration</option>
                      <option value="email-hosting">Email Hosting</option>
                      <option value="ssl-certificates">SSL Certificates</option>
                      <option value="website-migration">Website Migration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your hosting requirements, current challenges, or any questions you have..."
                    rows={5}
                    required
                    className="border-border focus:ring-primary"
                  />
                </div>

                <Button type="submit" className="btn-hero w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover-lift shadow-custom bg-gradient-card border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-lg font-medium text-primary mb-1">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional CTA */}
            <Card className="shadow-custom bg-gradient-primary border-0 text-white">
              <CardContent className="p-8 text-center">
                <Headphones className="w-16 h-16 mx-auto mb-4 text-white/90" />
                <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="mb-6 text-white/90">
                  Our technical experts are available 24/7 to assist with hosting questions, migrations, and technical support.
                </p>
                <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +91 9876543210
                </Button>
              </CardContent>
            </Card>

            {/* Trust Badges */}
            <div className="bg-gradient-card rounded-2xl p-6 shadow-custom">
              <h4 className="font-semibold text-foreground mb-4 text-center">Why Choose GOwithWeb?</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">ISO 27001 Certified Data Centers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-success" />
                  <span className="text-sm text-muted-foreground">99.9% Uptime SLA Guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Headphones className="w-5 h-5 text-secondary" />
                  <span className="text-sm text-muted-foreground">24/7 Expert Technical Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;