import { useState } from 'react';
import { Menu, X, Shield, Zap, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const sivwebaiLogo = "https://ik.imagekit.io/u9jvapj6d/SivWeb-AI.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems = [
    { 
      name: 'Home', 
      href: '/',
      subItems: []
    },
    { 
      name: 'Services', 
      href: '/services',
      subItems: [
        { name: 'Web Hosting', href: '/services/hosting' },
        { name: 'Web Design', href: '/services/web-design' },
        { name: 'Development', href: '/services/development' },
        { name: 'Security', href: '/services/security' },
        { name: 'SSL Security', href: '/ssl-security' },
        { name: 'SEO Services', href: '/seo-services' },
        { name: 'Digital Marketing', href: '/digital-marketing' },
      ]
    },
    { 
      name: 'Projects', 
      href: '/projects',
      subItems: [
        { name: 'React Projects', href: '/projects/react' },
        { name: 'Node.js Projects', href: '/projects/nodejs' },
        { name: 'WordPress Projects', href: '/projects/wordpress' },
        { name: 'Drupal Projects', href: '/projects/drupal' },
      ]
    },
    { 
      name: 'AI Services', 
      href: '/ai-services',
      subItems: [
        { name: 'Generative AI', href: '/ai-services#generative' },
        { name: 'Vision AI', href: '/ai-services#vision' },
        { name: 'Speech AI', href: '/ai-services#speech' },
        { name: 'AI Marketing', href: '/ai-services#marketing' },
        { name: 'n8n Automation', href: '/ai-services#n8n' },
        { name: 'AI Tools', href: '/ai-services#tools' },
      ]
    },
    { 
      name: 'Tools', 
      href: '/tools',
      subItems: [
        { name: 'Domain Checker', href: '/tools#domain' },
        { name: 'Speed Test', href: '/tools#speed' },
        { name: 'SEO Analyzer', href: '/tools#seo' },
        { name: 'Uptime Monitor', href: '/tools#uptime' },
        { name: 'AI Chatbot', href: '/tools#chatbot' },
      ]
    },
    { 
      name: 'Blog', 
      href: '/blog',
      subItems: []
    },
    { 
      name: 'Contact', 
      href: '/contact',
      subItems: []
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-foreground via-primary to-secondary backdrop-blur-md border-b border-white/20 shadow-2xl">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center group flex-shrink-0">
            <div className="w-24 h-18 bg-white rounded-xl flex items-center justify-center shadow-2xl group-hover:shadow-rainbow transition-all duration-300 group-hover:scale-105 overflow-hidden p-2">
              <img 
                src={sivwebaiLogo} 
                alt="SivWebAI - End-to-End Web Solutions" 
                className="w-full h-16 object-contain"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => item.subItems.length > 0 && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a 
                  href={item.href} 
                  className="flex items-center gap-1 px-4 py-2 text-white font-bold text-sm hover:text-accent-lime transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-1 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-accent-lime after:to-secondary after:rounded-full after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {item.name}
                  {item.subItems.length > 0 && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                  )}
                </a>
                
                {/* Dropdown Menu */}
                {item.subItems.length > 0 && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-foreground/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 py-2 animate-fade-in z-50">
                    {item.subItems.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-3 text-white hover:bg-primary/30 hover:text-accent-lime transition-all duration-200 text-sm font-medium"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side: CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="outline" 
              onClick={() => window.open('https://client.sivwebai.com', '_blank')}
              className="group font-black border-white/40 text-white hover:bg-white hover:text-primary"
            >
              <Shield className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              Client Portal
            </Button>
            <Button 
              variant="hero"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group font-black bg-gradient-to-r from-accent-bright to-warning text-white hover:shadow-accent"
            >
              <Zap className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-accent-lime transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-white/20 bg-foreground/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <a 
                    href={item.href} 
                    className="block py-3 text-white hover:text-accent-lime transition-colors font-bold text-lg"
                  >
                    {item.name}
                  </a>
                  {item.subItems.length > 0 && (
                    <div className="pl-4 space-y-1">
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-2 text-white/80 hover:text-accent-lime transition-colors text-sm font-medium"
                        >
                          • {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="flex flex-col space-y-3 pt-4 border-t border-white/20 mt-4">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Client Portal
                </Button>
                <Button className="bg-gradient-to-r from-accent-bright to-warning text-white">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
