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
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-foreground via-primary-dark to-foreground text-white relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-r from-primary to-accent-cyan rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-r from-secondary to-accent-lime rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-40 w-40 h-40 bg-gradient-to-r from-accent-bright to-warning rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute bottom-40 left-40 w-44 h-44 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl animate-float delay-500"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent-bright/10 opacity-50"></div>
      <div className="absolute inset-0" style={{backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.08) 2px, transparent 0)", backgroundSize: "32px 32px"}}></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-24 h-16 bg-white rounded-xl flex items-center justify-center shadow-2xl hover:rotate-3 transition-transform duration-300 overflow-hidden px-2">
                <img 
                  src={sivwebaiLogo} 
                  alt="SivWebAI Logo" 
                  className="w-full h-14 object-contain"
                />
              </div>
            </div>
            <p className="text-white/90 mb-6 text-base font-medium leading-relaxed">
              Your complete end-to-end web solutions partner. From development to hosting, troubleshooting to ongoing support - we handle all your website needs with 24/7 expert assistance.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-secondary" />
                <span className="text-white/80">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-secondary" />
                <span className="text-white/80">support@sivwebai.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="text-white/80">Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">Our Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-white hover:pl-2 transition-all duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">Support & Help</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-white hover:pl-2 transition-all duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-white hover:pl-2 transition-all duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">Legal & Policies</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-white hover:pl-2 transition-all duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SEO Keywords Section */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <h4 className="font-semibold text-lg mb-4 text-center text-secondary">Complete Web Solutions</h4>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            {[
              "Web Development India", "Website Hosting", "Domain Registration", 
              "Technical Support 24/7", "Website Troubleshooting", "SSL Certificates",
              "SEO Optimization", "Digital Marketing", "E-commerce Solutions",
              "WordPress Development", "Custom Web Applications", "API Integration",
              "Website Maintenance", "Server Management", "Website Security",
              "Performance Optimization", "Free Migration", "AI-Powered Support"
            ].map((keyword, index) => (
              <span 
                key={index} 
                className="bg-white/10 px-3 py-1 rounded-full text-white/80 hover:bg-secondary/30 hover:text-white transition-colors cursor-pointer"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Links */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-white/60 text-sm">Follow us:</span>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors hover:scale-110 transform">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors hover:scale-110 transform">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors hover:scale-110 transform">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors hover:scale-110 transform">
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-white/60 text-sm text-center md:text-right">
              <p>© {currentYear} SivWebAI. All rights reserved.</p>
              <p className="mt-1">End-to-End Web Solutions & Support</p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              <span>99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              <span>24/7 Expert Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              <span>30-Day Money Back</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              <span>Free Website Migration</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              <span>End-to-End Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;