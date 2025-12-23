import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
} from "lucide-react";
import contactHero from "@/assets/contact-hero.jpg";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Support",
      details: "+1 (555) 153-5471",
      description: "24/7 Priority Support",
      action: "tel:+15551535471",
    },
    {
      icon: Mail,
      title: "Email Support",
      details: "support@sivwebai.com",
      description: "Response within 2 hours",
      action: "mailto:support@sivwebai.com",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "India · Global Remote",
      description: "Worldwide Service",
      action: "#",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "24/7 Available",
      description: "Always Online",
      action: "#",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact SivWebAI | Free Consultation & 24/7 Web Support</title>
        <meta
          name="description"
          content="Contact SivWebAI for web development, hosting, domains & DevOps services. Free consultation, fast response, and 24/7 expert support."
        />
        <link rel="canonical" href="https://sivwebai.com/contact" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact SivWebAI – Free Consultation & Support" />
        <meta
          property="og:description"
          content="Get expert consultation for web development, hosting, and digital solutions. 24/7 support available."
        />
        <meta property="og:url" content="https://sivwebai.com/contact" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact SivWebAI" />
        <meta name="twitter:description" content="Free consultation & expert web support." />

        {/* Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "SivWebAI",
            url: "https://sivwebai.com",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+15551535471",
              contactType: "customer support",
              availableLanguage: ["English"],
            },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-foreground via-primary-dark to-foreground">
        <Header />

        <main className="pt-24">

          {/* HERO */}
          <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                    Let’s Talk About Your Project
                  </h1>
                  <p className="text-xl text-white/80 mb-8">
                    Free consultation for web development, hosting, domains,
                    DevOps & automation. Our experts are available 24/7.
                  </p>

                  <Button size="lg" className="bg-gradient-to-r from-accent-bright to-warning text-white">
                    <MessageCircle className="mr-2" />
                    Start Free Consultation
                  </Button>
                </div>

                <img
                  src={contactHero}
                  alt="Contact SivWebAI Support Team"
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </section>

          {/* CONTACT CARDS */}
          <section className="py-20">
            <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, i) => (
                <Card
                  key={i}
                  onClick={() => window.open(info.action)}
                  className="cursor-pointer bg-white/10 backdrop-blur-xl border border-white/20 p-6 text-center hover:scale-105 transition"
                >
                  <info.icon className="w-8 h-8 text-secondary mx-auto mb-4" />
                  <h3 className="text-white font-bold mb-1">{info.title}</h3>
                  <p className="text-secondary font-medium">{info.details}</p>
                  <p className="text-white/60 text-sm">{info.description}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* FORM */}
          <section className="py-20">
            <div className="container mx-auto px-4 max-w-4xl">
              <Card className="bg-white/10 backdrop-blur-xl border border-white/20 p-10">
                <h2 className="text-3xl font-black text-white mb-6">
                  Send Us a Message
                </h2>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" required />
                    <Input placeholder="Last Name" required />
                  </div>
                  <Input type="email" placeholder="Email Address" required />
                  <Input type="tel" placeholder="Phone Number" />
                  <Textarea rows={6} placeholder="Tell us about your project…" />

                  <Button size="lg" className="w-full bg-gradient-to-r from-accent-bright to-warning">
                    <Send className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-4xl font-black text-white mb-10 text-center">
                Frequently Asked Questions
              </h2>

              {[
                {
                  q: "How fast can you start?",
                  a: "Most projects start within 1–2 business days after consultation.",
                },
                {
                  q: "Do you provide ongoing support?",
                  a: "Yes, we offer maintenance & 24/7 support packages.",
                },
                {
                  q: "Do you offer hosting?",
                  a: "Yes, secure hosting with 99.9% uptime & monitoring.",
                },
              ].map((f, i) => (
                <Card key={i} className="bg-white/10 border border-white/20 p-6 mb-4">
                  <h3 className="text-white font-semibold mb-2">{f.q}</h3>
                  <p className="text-white/70">{f.a}</p>
                </Card>
              ))}
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
