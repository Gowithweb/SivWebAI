import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import sivwebaiLogo from '@/assets/sivwebai-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Web Development", href: "/web-development" },
      { name: "Website Hosting", href: "/services" },
      { name: "Domain Services", href: "/services" },
      { name: "Technical Support", href: "/technical-support" },
      { name: "SSL Certificates", href: "/ssl" },
      { name: "SEO & Marketing", href: "/seo" },
    ],
    support: [
      { name: "24/7 Support", href: "/contact" },
      { name: "Free Migration", href: "/contact" },
      { name: "Knowledge Base", href: "/blog" },
      { name: "Server Status", href: "/tools" },
      { name: "Contact Us", href: "/contact" },
      { name: "AI Assistant", href: "/tools" },
    ],
    company: [
      { name: "About SivWebAI", href: "/team" },
      { name: "Our Projects", href: "/projects" },
      { name: "AI Services", href: "/ai-services" },
      { name: "Partner Program", href: "/contact" },
      { name: "Blog", href: "/blog" },
      { name: "Reviews", href: "/projects" },
    ],
    legal: [
      { name: "Terms of Service", href: "#terms" },
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Refund Policy", href: "#refund" },
      { name: "SLA Agreement", href: "#sla" },
      { name: "Acceptable Use", href: "#aup" },
      { name: "Cookie Policy", href: "#cookies" },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-foreground via-primary-dark to-foreground text-white relative overflow-hidden">

      {/* Background Effects – SAME AS OLD */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-r from-primary to-accent-cyan rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-r from-secondary to-accent-lime rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-40 w-40 h-40 bg-gradient-to-r from-accent-bright to-warning rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute bottom-40 left-40 w-44 h-44 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl animate-float delay-500"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent-bright/10"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.07) 2px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-4 py-16 relative z-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img
              src={sivwebaiLogo}
              alt="SivWebAI Logo"
              className="h-14 mb-5 object-contain"
            />

            <p className="text-white/85 text-sm leading-relaxed mb-6">
              SivWebAI is your trusted partner for complete web solutions —
              development, hosting, automation, security, and 24/7 expert support.
            </p>

            <div className="space-y-3 text-sm">
              <a
                href="tel:+15551535471"
                className="flex items-center gap-2 text-white/75 hover:text-secondary transition"
              >
                <Phone size={16} /> +1 (555) 153-5471
              </a>

              <a
                href="mailto:support@sivwebai.com"
                className="flex items-center gap-2 text-white/75 hover:text-secondary transition"
              >
                <Mail size={16} /> support@sivwebai.com
              </a>

              <div className="flex items-center gap-2 text-white/75">
                <MapPin size={16} /> India · Global Operations
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-secondary">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="text-white/70 hover:text-white transition">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-secondary">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="text-white/70 hover:text-white transition">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-secondary">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="text-white/70 hover:text-white transition">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-secondary">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="text-white/70 hover:text-white transition">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm text-center md:text-left">
            © {currentYear} SivWebAI. All rights reserved.
          </p>

          <div className="flex gap-5 text-white/60">
            <a href="#" className="hover:text-secondary transition"><Facebook size={18} /></a>
            <a href="#" className="hover:text-secondary transition"><Twitter size={18} /></a>
            <a href="#" className="hover:text-secondary transition"><Linkedin size={18} /></a>
            <a href="#" className="hover:text-secondary transition"><Instagram size={18} /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
