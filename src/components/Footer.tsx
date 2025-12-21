import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const sivwebaiLogo = "https://ik.imagekit.io/u9jvapj6d/SivWeb-AI.png";

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
    ]
  };

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-20 h-14 bg-white rounded-lg flex items-center justify-center overflow-hidden p-1.5">
                <img 
                  src={sivwebaiLogo} 
                  alt="SivWebAI Logo" 
                  className="w-full h-12 object-contain"
                />
              </div>
            </div>
            <p className="text-white/60 mb-4 text-sm leading-relaxed">
              Your complete end-to-end web solutions partner. From development to hosting, troubleshooting to ongoing support.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-white/40" />
                <span className="text-white/60">+15551535471</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-white/40" />
                <span className="text-white/60">support@sivwebai.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-white/40" />
                <span className="text-white/60">Bengaluru, Karnataka, India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-white/90 uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-white/90 uppercase tracking-wider">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-white/90 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-white/90 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-4 text-white/40 text-xs">
              <span>99.9% Uptime</span>
              <span>•</span>
              <span>24/7 Support</span>
              <span>•</span>
              <span>30-Day Guarantee</span>
            </div>

            {/* Copyright */}
            <div className="text-white/40 text-xs">
              © {currentYear} SivWebAI. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;