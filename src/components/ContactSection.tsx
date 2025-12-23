import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useSearchParams } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Headphones,
  Globe,
} from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  /* ✅ Auto-prefill message from Domain section */
  useEffect(() => {
    const prefilledMessage = searchParams.get("message");
    if (prefilledMessage) {
      setFormData((prev) => ({
        ...prev,
        message: decodeURIComponent(prefilledMessage),
        service: "domain-registration",
      }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Message Sent Successfully 🚀",
      description: "Our team will contact you shortly.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 153-5471",
      description: "24/7 Technical Support",
    },
    {
      icon: Mail,
      title: "Email",
      content: "support@sivwebai.com",
      description: "Quick Response",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "India · Global Remote",
      description: "Worldwide Support",
    },
    {
      icon: Clock,
      title: "Availability",
      content: "24/7",
      description: "Always Online",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-br from-foreground via-primary-dark to-foreground overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="relative z-10 container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Let’s Build Something Great
          </h2>
          <p className="text-xl text-white/80">
            Talk to our experts for domains, hosting, development, and complete
            web solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* FORM */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <MessageSquare className="text-secondary" />
                Send Us a Message
              </CardTitle>
              <CardDescription className="text-white/70">
                We usually respond within minutes.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="bg-white/10 border-white/30 text-white"
                  />
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="bg-white/10 border-white/30 text-white"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="bg-white/10 border-white/30 text-white"
                  />

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/30 text-white"
                  >
                    <option value="">Select Service</option>
                    <option value="domain-registration">Domain Registration</option>
                    <option value="hosting">Hosting</option>
                    <option value="web-development">Web Development</option>
                    <option value="migration">Migration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you need…"
                  rows={5}
                  required
                  className="bg-white/10 border-white/30 text-white"
                />

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent-bright via-warning to-accent-bright text-white font-bold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* INFO */}
          <div className="space-y-6">
            {contactInfo.map((info, i) => (
              <Card
                key={i}
                className="bg-white/10 backdrop-blur-xl border border-white/20"
              >
                <CardContent className="p-6 flex gap-4">
                  <info.icon className="w-8 h-8 text-secondary" />
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <p className="text-secondary font-medium">{info.content}</p>
                    <p className="text-white/60 text-sm">{info.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* CTA */}
            <Card className="bg-gradient-to-r from-primary via-secondary to-accent-bright text-white">
              <CardContent className="p-8 text-center">
                <Headphones className="w-14 h-14 mx-auto mb-4" />
                <h3 className="text-2xl font-black mb-3">
                  Need Immediate Help?
                </h3>
                <Button
                  onClick={() => window.open("tel:+15551535471")}
                  className="bg-white text-foreground font-bold"
                >
                  <Phone className="mr-2" />
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
