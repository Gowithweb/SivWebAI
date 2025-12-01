import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Web Hosting India", href: "#hosting" },
      { name: "WordPress Hosting", href: "#wordpress" },
      { name: "VPS Hosting", href: "#vps" },
      { name: "Dedicated Servers", href: "#dedicated" },
      { name: "Domain Registration", href: "#domains" },
      { name: "SSL Certificates", href: "#ssl" },
    ],
    support: [
      { name: "24/7 Support", href: "#support" },
      { name: "Free Migration", href: "#migration" },
      { name: "Knowledge Base", href: "#kb" },
      { name: "Server Status", href: "#status" },
      { name: "Contact Us", href: "#contact" },
      { name: "Live Chat", href: "#chat" },
    ],
    company: [
      { name: "About SivWebAI", href: "#about" },
      { name: "Data Centers", href: "#datacenters" },
      { name: "Careers", href: "#careers" },
      { name: "Partner Program", href: "#partners" },
      { name: "Affiliate Program", href: "#affiliate" },
      { name: "Reviews", href: "#reviews" },
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
    <footer className="bg-gradient-to-br from-primary via-secondary to-accent-bright text-white relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-r from-accent-cyan to-accent-lime rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-r from-accent-bright to-secondary rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-40 w-40 h-40 bg-gradient-to-r from-accent-lime to-accent-cyan rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute bottom-40 left-40 w-44 h-44 bg-gradient-to-r from-secondary to-accent-bright rounded-full blur-3xl animate-float delay-500"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-primary to-accent-cyan rounded-full blur-3xl animate-pulse-slow delay-700"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/10 via-accent-bright/10 to-accent-lime/10 opacity-70"></div>
      <div className="absolute inset-0" style={{backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 2px, transparent 0)", backgroundSize: "32px 32px"}}></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-2xl hover:rotate-12 transition-transform duration-300">
                <Globe className="w-8 h-8 bg-gradient-to-br from-primary via-secondary to-accent-bright bg-clip-text text-transparent" />
              </div>
              <span className="text-3xl font-black drop-shadow-lg">SivWebAI</span>
            </div>
            <p className="text-white/95 mb-6 text-base font-medium leading-relaxed">
              Next-generation web solutions powered by AI. Offering cutting-edge web development, hosting, and digital services with 24/7 support and 99.9% uptime.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-white/60" />
                <span className="text-white/80">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-white/60" />
                <span className="text-white/80">support@sivwebai.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-white/60" />
                <span className="text-white/80">Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Hosting Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support & Help</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal & Policies</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-white transition-colors text-sm"
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
          <h4 className="font-semibold text-lg mb-4 text-center">Popular Hosting Solutions</h4>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            {[
              "Web Hosting India", "Buy Domain with Hosting", "Free Domain and Hosting", 
              "Cheap Hosting with Free SSL", "Best WordPress Hosting India", "Premium Hosting for Businesses",
              "Laravel & Node.js Server Hosting", "Free Website Setup Services", "Unlimited Bandwidth Hosting",
              "G Suite Email Hosting Provider", "Kubernetes & ERP Hosting Solutions", "24/7 Server Monitoring",
              "Fast & Secure Website Hosting", "Reseller Hosting Plans India", "Ecommerce Hosting with SSL",
              "AI Domain Registration", "Secure VPS with Control Panel", "Dedicated Linux & Windows Servers",
              "Free Website Migration India", "Cloud Hosting for Developers"
            ].map((keyword, index) => (
              <span 
                key={index} 
                className="bg-white/10 px-3 py-1 rounded-full text-white/80 hover:bg-white/20 transition-colors cursor-pointer"
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
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-white/60 text-sm text-center md:text-right">
              <p>© {currentYear} SivWebAI. All rights reserved.</p>
              <p className="mt-1">Next-generation AI-powered web solutions since 2024</p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm">
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>•</span>
              <span>99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>•</span>
              <span>24/7 Expert Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>•</span>
              <span>30-Day Money Back</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>•</span>
              <span>GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;